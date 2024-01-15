import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Cat from './components/Cat';
import { ForState } from './components/ForState';
import HandlingTextInput from './components/HandlingTextInput';
import ForScrollView from './components/ForScrollView';
import ForFlatList from './components/ForFlatList';
import ForSectionList from './components/ForSectionList';

const PizzaTranslator = () => {
 
  return (
    <View style={{padding: 100}}>
      
      <Cat name="shahriar"/>
      <ForState/>
      <HandlingTextInput/>
      {/* <ForScrollView/> */}
      {/* <ForFlatList/> */}
      {/* <ForSectionList/> */}
    </View>
  );
};

export default PizzaTranslator;