/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Home from './src/views/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StargazersList from './src/views/StargazersList';
import { ThemeContext } from './src/context/ThemeContext';
import Toast from 'react-native-toast-message';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <ThemeContext>
      <SafeAreaView style={styles.safeArea}> 
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Stargazers finder" component={Home} />
            <Stack.Screen name="StargazersList" options={{ title: 'Stargazers' }} component={StargazersList} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
    </SafeAreaView>
    </ThemeContext>
    
  );
}

const styles = StyleSheet.create({
  safeArea: {
   flex: 1
  },
});

export default App;
