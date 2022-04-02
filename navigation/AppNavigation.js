import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/book/HomeScreen";

import BookDetailsScreen from "../screens/book/BookDetailsScreen";
import EditBookScreen from "../screens/users/EditBookScreen";

const Stack = createNativeStackNavigator();

const Details = ({ route, navigation }) => {
  const { title } = route.params;
  return (
    <View>
      <Text>Details Screen Man!!!</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={BookDetailsScreen} />
      <Stack.Screen name="Edit" component={EditBookScreen} />
    </Stack.Navigator>
  );
}
