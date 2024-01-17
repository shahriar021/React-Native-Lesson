import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

const Index = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Loading, please wait...</Text>
    <ActivityIndicator size="large" color="red" animating={true}/>
  </View>
);

export default Index;