import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ForFlexBasic = () => {
  return (
    <View style={{flex: 1}}>
    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
  </View>
  )
}

export default ForFlexBasic

const styles = StyleSheet.create({})