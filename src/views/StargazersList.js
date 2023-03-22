import React, {useRef, useState, useCallback} from 'react'
import { Button, SafeAreaView, Text, TextInput, View, FlatList, Image, StyleSheet } from 'react-native'
import { getFavorites } from '../services/github-api';

export default function StargazersList({route}) {
    const {list, owner, repo} = route.params;
    const [stargazers, setStargazers] = useState(list);
    const [page, setPage] = useState(1);


    const onEndReached = ()=>{
        if(stargazers.length){
            const req = {
                owner: owner,
                repo: repo,
                page: page + 1
            }
            getFavorites(req).then((resp)=>{
                setStargazers(old => [...old, ...resp.data])
                setPage(page + 1)
            });
        }
        
    }

      
      const HeaderComponent = () =>{
        return(
        <View>
            <Text>Repo owner:</Text> 
            <TextInput 
                onChangeText={(value)=>setOwnerRef(value.trim())} 
                value={ownerRef}/>
            <Text>Repo Name:</Text> 
            <TextInput 
                onChangeText={(value)=>setRepoRef(value.trim())} 
                value={repoRef}
            />
        </View>
        )
      }

      const Stargazer = ({item}) =>{
        return(
          <View style={styles.stargazers}>
            <Image source={{uri:item.avatar_url}} width={100} height={100}/>
            <Text>{item?.login}</Text>
          </View>
        )
      }

  return (
    <>
        <FlatList 
            data={stargazers}
            renderItem={({item}) => <Stargazer item={item}/>}
            keyExtractor={item => item.id}
           // ListHeaderComponent={HeaderComponent}
            onEndReached={()=>onEndReached()}
            onEndReachedThreshold={0.8}
        />
       
    </>
  )
}

const styles = StyleSheet.create({
    stargazers:{
        flexDirection: 'row',
        padding:20,
    }
})