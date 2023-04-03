import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, StyleSheet } from 'react-native'
import { Text, Button, TextInput } from '../components';
import { getFavorites, getUser } from '../services/github-api';
import LoadingHOC from '../components/hoc/LoadingHOC';
import Toast from 'react-native-toast-message';
import usePreviousValue from '../hooks/usePreviousValue';

const Home = ({ navigation, setLoading }) =>{

    const [ownerName, setOwnerName] = useState("");
    const [repoName, setRepoName] = useState("");

    const getFavoritesHandler = () =>{
        setLoading(true);
        const req = {
            owner: ownerName.trim(),
            repo: repoName.trim(),
            page: 1
        }
        getFavorites(req).then((resp)=>{
            setLoading(false);
            if(resp.status==200){
                navigation.navigate('StargazersList',{
                    list: resp.data,
                    owner: ownerName,
                    repo: repoName,
                })
            }else{
                showToastError();
            }
            
        }).catch((err)=>{
            console.log(err)
            showToastError()
        });
    }

    const showToastError = () =>{
        Toast.show({
            type: 'error',
            text1: "We're sorry",
            text2: 'Something gone wrong, please retry!',
            position:'bottom'
          });
    }

    const handleSubmit = () => {
        getFavoritesHandler();
    }

    const handleClear = () => {
        setOwnerName("");
        setRepoName("");
    }

    const handleAutoCompilation = () => {
        setOwnerName("Octocat");
        setRepoName("Hello-world");
    }

  return (
    <View>
        <View style={styles.container}>
            <Text label={"Repo Owner: "}/> 
            <TextInput 
                onChangeText={(value)=>{
                    setOwnerName(value)
                }} 
                value={ownerName}
            />
            <Text label={"Repo name: "}/> 
            <TextInput 
                onChangeText={(value)=>setRepoName(value)} 
                value={repoName}
            />
        </View>
       
        <Button
            onPress={handleSubmit}
            title="Submit"
            disabled={!ownerName || !repoName}
        />
        <Button
            onPress={handleClear}
            title="Clear"
            color="secondary"
        />

        <Button
            onPress={handleAutoCompilation}
            title="Self compiling"
            color="success"
            disabled={ (ownerName && repoName) ? true : false}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 24,
        marginVertical: 24
    }
})

export default LoadingHOC(Home);