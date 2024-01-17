import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View>
        <ImageBackground
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkjzIo7wBbLoGGUVVl_YvJi9pFGDbCfawWrmHtkMmM-uHECOZr99fNQUyVMpr3c5XQRU&usqp=CAU'}}
            style={{flex:1,justifyContent:'center'}}
            resizeMode="cover"
        >
        <Image source={require('../assets/1_.jpeg')} style={{width:200,height:200,alignContent:'center',justifyContent:'center'}}/>
      <Image source={{uri:'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'}} style={{width:200,height:200}}/>
        </ImageBackground>
      
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})