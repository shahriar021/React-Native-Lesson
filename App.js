// import React, {useState} from 'react';
// import {Text, TextInput, View,SafeAreaView} from 'react-native';
// import Cat from './components/Cat';
// import { ForState } from './components/ForState';
// import HandlingTextInput from './components/HandlingTextInput';
// import ForScrollView from './components/ForScrollView';
// import ForFlatList from './components/ForFlatList';
// import ForSectionList from './components/ForSectionList';
// import ForFlexBasic from './components/ForFlexBasic';
// import ForFlex from './components/ForFlex'
// import FlexDirectionBasics from './components/ForFlexNext'




// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from './screens/HomeScreen';
// import AboutScreen from './screens/AboutScreen';
// import Index from './button/Index';

// const Stack = createNativeStackNavigator();

// const PizzaTranslator = () => {
 
//   return (
//     <SafeAreaView style={{flex:1}}>
      
//       {/* <Cat name="shahriar"/>
//       <ForState/>
//       <HandlingTextInput/> */}
//       {/* <ForScrollView/> */}
//       {/* <ForFlatList/> */}
//       {/* <ForSectionList/> */}
//       {/* <ForFlexBasic/> */}
//       {/* <ForFlex/> */}
//       {/* <FlexDirectionBasics/> */}


//       {/* <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="About" component={AboutScreen} />
//       </Stack.Navigator>
//     </NavigationContainer> */}
    
    
//       <Text>Hello World!</Text>
   
     
//     </SafeAreaView>
//   );
// };

// export default PizzaTranslator;




import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Index from './activelyIndicator/Index';

function App() {
  return (
    <View style={styles.container}>
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;