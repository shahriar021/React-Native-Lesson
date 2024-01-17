import { StyleSheet, Text, Vie,SafeAreaView,Button } from 'react-native'
import React from 'react'

const Index = () => {   
    const handleButton=()=>{
        alert("pressed....")
    }

  return (
   
        <Button
            title={"press here"}
            color="#111000"
            
            onPress={handleButton}
        />
   
  )
}

export default Index

const styles = StyleSheet.create({})