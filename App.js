import * as Font from "expo-font";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigation from "./navigation/AppNavigation";
import AppButton from "./components/UI/AppButton";

const fetchFonts = async () => {
  return Font.loadAsync({
    "app-font-regular": require("./assets/fonts/MPLUS1-Regular.ttf"),
    "app-font-black": require("./assets/fonts/MPLUS1-Black.ttf"),
    "app-font-bold": require("./assets/fonts/MPLUS1-Bold.ttf"),
    "app-font-extraBold": require("./assets/fonts/MPLUS1-ExtraBold.ttf"),
    "app-font-extraLight": require("./assets/fonts/MPLUS1-ExtraLight.ttf"),
    "app-font-light": require("./assets/fonts/MPLUS1-Light.ttf"),
    "app-font-medium": require("./assets/fonts/MPLUS1-Medium.ttf"),
    "app-font-semiBold": require("./assets/fonts/MPLUS1-SemiBold.ttf"),
    "app-font-thin": require("./assets/fonts/MPLUS1-Thin.ttf"),
  });
};
function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

export default App;
