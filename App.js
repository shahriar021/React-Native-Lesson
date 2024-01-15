import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Cat from './components/Cat';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 100}}>
      <TextInput
        style={{height: 90,alignItems:"center",justifyContent:"center"}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
      <Cat/>
    </View>
  );
};

export default PizzaTranslator;