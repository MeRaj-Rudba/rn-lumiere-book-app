import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import BookList from "../../components/BookList";

function HomeScreen(props) {
  const [books, setBooks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const loadBooks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://lumiere-book.herokuapp.com/books");
      const result = await response.json();
      setBooks(result.books);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <Text>Loading....</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <BookList books={books} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
