import React from "react";
import { StyleSheet, View, Text } from "react-native";
import tw from "twrnc";
function CustomText(props) {
  return (
    <Text
      style={[
        {
          fontFamily: `app-font-${props.type || "regular"}`,
          fontSize: `${props.size || 18}`,
        },
      ]}
    >
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({});

export default CustomText;
