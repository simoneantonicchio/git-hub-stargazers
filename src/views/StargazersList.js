import React, {useRef, useState, useCallback} from 'react'
import { View, FlatList, Image, StyleSheet, Linking } from 'react-native'
import { getFavorites } from '../services/github-api';
import { Spinner, Text } from '../components';
import { useTheme } from '../context/ThemeContext';
import usePreviousValue from '../hooks/usePreviousValue';

export default function StargazersList({route}) {
    const {list, owner, repo} = route.params;
    const [stargazers, setStargazers] = useState(list);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState();

    const onEndReached = async()=>{
        if(stargazers.length && !loadingMore){
            setLoadingMore(true);
            const req = {
                owner: owner,
                repo: repo,
                page: page + 1
            }
           
            await getFavorites(req).then((resp)=>{
              console.log("pippo", req.page)
              if(resp.status == 200){
                setStargazers(old => [...old, ...resp.data])
                setPage(page + 1)
              }
              setLoadingMore(false);
            }).catch((err)=> setLoadingMore(false));
        }
        
    }

      
      const HeaderComponent = () =>{
        return(
        <View>
        </View>
        )
      }

      const FooterComponent = () =>{
        return(
        <View>
          <Spinner />
        </View>
        )
      }

      const Stargazer = ({item}) =>{
        return(
          <View style={styles(useTheme()).stargazers}>
            <Image style={styles(useTheme()).avatar} source={{uri:item?.avatar_url}}/>
            <View style={styles(useTheme()).infos} >
              <View style={{flexDirection:'row'}}>
                <Text label={"User: "} customStyle={{fontWeight:'bold'}}/>
                <Text label={item?.login}/>
              </View>
              <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Text label={"Profile link: "} customStyle={{fontWeight:'bold'}}/>
                <Text 
                  label={"Click here"} 
                  customStyle={{textDecorationLine: 'underline'}}
                  onPress={()=>Linking.openURL(item?.html_url)}
                />
              </View>
            </View>         
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
            ListFooterComponent={()=>loadingMore && <FooterComponent />}
            onEndReached={()=>onEndReached()}
            onEndReachedThreshold={4}
            oneEnd
        />
       
    </>
  )
}

const styles = ({spacing}) => StyleSheet.create({
    stargazers:{
        flexDirection: 'row',
        alignItems:'center',
        padding: spacing?.l,
        backgroundColor:'white',
        marginVertical: spacing?.m,
        marginHorizontal: spacing?.l,
        elevation:20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 20,
    },
    infos:{
      paddingHorizontal: spacing?.s,
    },
    avatar:{
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
    }
})