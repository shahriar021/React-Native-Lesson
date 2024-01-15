import React, { useState } from 'react'
import { TextInput, View,Text } from 'react-native'

const HandlingTextInput = () => {
    const [text,isSetText]=useState('')
  return (
   <View>
    <TextInput placeholder='type here..'
    onChangeText={(data)=>isSetText(data)}
    defaultValue={text}
    />

    <Text>{text}</Text>
   </View>
  )
}

export default HandlingTextInput