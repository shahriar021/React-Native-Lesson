import React from "react";
import { Text, View, Image } from "react-native";

import style from "../forStyling/styles";

const Cat = (props) => {
  return (
    <View>
      <Text style={[style.kisuEkta , style.onnoKisuEkta]}>Hello, I am...{props.name}</Text>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat1.png",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default Cat;
