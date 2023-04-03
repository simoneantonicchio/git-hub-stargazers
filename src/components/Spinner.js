import React from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { useTheme } from '../context/ThemeContext'

const Spinner = ({fullPage}) => {
  const { colors } = useTheme();
  return (
    fullPage ? 
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={colors?.primary} />
        </View> : 
        <ActivityIndicator size="large" color={colors?.primary} />
    
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        opacity:0.7,
        zIndex:1,
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });

export default Spinner;