import React from 'react'
import {StyleSheet, TextInput} from 'react-native'
import { Text } from './index'
import { useTheme } from '../context/ThemeContext'


const _TextInput = ({onChangeText, onBlur, value, customStyle={}}) => {
  const { textVariants } = useTheme();
  return (
    <>
      <TextInput 
        onChangeText={onChangeText} 
        onBlur={onBlur}
        value={value}
        style={[styles(useTheme()).input, customStyle]}
      />
    </>
    
  )
}

const styles = ({spacing, colors})=>StyleSheet.create({
  input:{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    backgroundColor: colors?.background,
    marginVertical: spacing?.s,
    borderRadius: 5,
  }
})

export default _TextInput;