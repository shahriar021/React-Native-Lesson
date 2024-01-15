import React from 'react'

import { View,FlatList,Text } from 'react-native'

const ForFlatList = () => {
  return (
    <View >
    <FlatList
      data={[
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
      ]}
      renderItem={({item}) => <Text >{item.key}</Text>}
    />
  </View>
  )
}

export default ForFlatList