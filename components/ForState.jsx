import React, { useState } from 'react'

import { View,Button,Text } from 'react-native'

export const ForState = () => {

    const [getTouched,isGetTouched]=useState(true)
  return (
    <View>
        <Text></Text>
        <Button onPress={() => {
          isGetTouched(false);
        }}
        // disabled={!getTouched}
        title={getTouched ? 'Pour me some milk, please!' : 'Thank you!'}></Button>
    </View>
  )
}
