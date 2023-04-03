import React from 'react'
import { Button, View} from 'react-native'
import { useTheme } from '../context/ThemeContext'

const _Button = ({title, onPress, disabled, color="primary", customStyle={}}) => {
  const { button, spacing } = useTheme();
  return (
    <View style={{
        marginHorizontal: spacing?.l,
        marginVertical: spacing?.m,
        ...customStyle
    }}>
        <Button 
            color={button?.color[color]}
            title={title}
            onPress={onPress}
            disabled={disabled}
        />
    </View>
    
  )
}

export default _Button;