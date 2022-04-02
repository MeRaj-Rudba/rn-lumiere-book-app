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
    "app-font-regular": require("./assets/fonts/PTSans-Regular.ttf"),
    "app-font-bold": require("./assets/fonts/PTSans-Bold.ttf"),
    "app-font-italic": require("./assets/fonts/PTSans-Italic.ttf"),
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
