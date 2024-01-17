import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";

const Index = () => {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6A0E37"
        hidden={false}
        animated={true}
        translucent={true}
      />
      <Text>hellow</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
