import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import tw from "twrnc";

import BookCard from "./BookCard";
function BookList(props) {
  return (
    <View style={[tw`p-10 w-full h-full bg-white dark:bg-black `]}>
      <FlatList
        data={props.books}
        keyExtractor={(item) => item._id.toString()}
        renderItem={(itemData) => <BookCard book={itemData.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default BookList;
