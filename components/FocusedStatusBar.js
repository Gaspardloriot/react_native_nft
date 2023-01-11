import { View, Text, StatusBar } from 'react-native'
import {useIsFocused} from '@react-navigation/core'
import React from 'react'

const FocusedStatusBar = (props) => {
   const isFocused = useIsFocused();
   return isFocused ? <View
      style={{
         height: props.insets, backgroundColor : props.backgroundColor
                     }}><StatusBar animated={true} {...props} /></View> : null;
}

export default FocusedStatusBar