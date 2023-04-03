import React from 'react'
import {Text} from 'react-native'
import { useTheme } from '../context/ThemeContext'


const _Text = ({label, customStyle={}, onPress}) => {
  const { textVariants } = useTheme();
  return (
    <Text 
        style={[textVariants?.text,customStyle]}
        onPress={onPress}
    >
        {label}
    </Text>
  )
}

export default _Text;