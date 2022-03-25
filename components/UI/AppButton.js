import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import tw from "twrnc";

function AppButton(props) {
  let Touchable = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <View style={[styles.button, props.style]}>
      <Touchable onPress={props.onPress}>
        <View style={tw`px-6 py-2 bg-${props.themeColor || "purple"}-500 `}>
          <Text
            style={[
              tw`text-center text-${props.themeColor || "purple"}-100`,
              styles.text,
            ]}
          >
            {props.children}
          </Text>
        </View>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "white",
    width: 150,
  },
  text: {
    fontFamily: "app-font-regular",
  },
});

export default AppButton;
