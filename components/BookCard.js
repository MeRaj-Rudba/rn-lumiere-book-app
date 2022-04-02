import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import AppButton from "./UI/AppButton";
import CustomText from "./UI/CustomText";
import Theme from "../constants/Theme";

function BookCard(props) {
  const navigation = useNavigation();
  // console.log(props.book);
  const detailsHandler = () => {
    navigation.navigate("Details", {
      _id: props.book._id,
    });
  };
  return (
    <View
      style={tw`max-w-sm bg-white rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 my-5`}
    >
      <Image
        source={{ uri: props.book.image }}
        style={tw`h-48 lg:h-auto lg:w-48 rounded-t-lg`}
      />
      <View style={tw`p-5`}>
        <Text
          style={[
            tw`mb-2 text-xl tracking-tight text-gray-900 dark:text-white`,
            styles.title,
          ]}
        >
          {props.book.title}
        </Text>

        <Text
          style={[
            tw`mb-3 font-normal text-gray-700 dark:text-gray-400`,
            styles.italic,
          ]}
        >
          by {props.book.author}
        </Text>

        <AppButton
          style={{}}
          themeColor={Theme.themeColor}
          onPress={detailsHandler}
        >
          Details
        </AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "app-font-regular",
  },
  title: {
    fontFamily: "app-font-bold",
  },
  italic: {
    fontFamily: "app-font-italic",
  },
});

export default BookCard;
