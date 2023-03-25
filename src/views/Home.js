import React, {useRef, useState, useCallback} from 'react'
import { Button, SafeAreaView, Text, TextInput, View, FlatList, Image, StyleSheet } from 'react-native'
import { getFavorites } from '../services/github-api';

export default function Home({ navigation }) {
    const [ownerRef, setOwnerRef] = useState("octocat");
    const [repoRef, setRepoRef] = useState("Hello-World");
    const [stargazers, setStargazers] = useState([]);
    const [page, setPage] = useState(1);

    const handleSubmit = () => {
        const req = {
            owner: ownerRef,
            repo: repoRef,
            page: page
        }
        getFavorites(req).then((resp)=>{
            //setStargazers(resp.data)
            navigation.navigate('StargazersList',{
                list: resp.data,
                owner: ownerRef,
                repo: repoRef,
            })
        });
    }

    const handleClear = () => {
        setOwnerRef("");
        setRepoRef("");
    }


  return (
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
        <Button
            onPress={handleSubmit}
            title="Submit"
        />
        <Button
            onPress={handleClear}
            title="Clear input"
        />
    </View>
  )
}