import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";
import tw from "twrnc";
import StarRating from "react-native-star-rating";

import { Ionicons } from "@expo/vector-icons";
import BookList from "../../components/BookList";
import Theme from "../../constants/Theme";
function BookDetailsScreen(props) {
  const [book, setBook] = useState(null);
  const [bookRating, setBookRating] = useState(3);
  const { _id } = props.route.params;
  const [isLoading, setIsLoading] = useState(false);
  const loadBook = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://lumiere-book.herokuapp.com/books/${_id}`
      );
      const result = await response.json();
      setBook(result.book);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBook();
  }, []);

  const Reviews = (props) => {
    // console.log(props.reviews);

    return <Text style={styles.title}>Reviews</Text>;
  };

  const handleStar = (givenRating) => {
    setBookRating(givenRating);
  };

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <Text>Loading....</Text>
      </View>
    );
  }

  return (
    <View>
      {book ? (
        <ScrollView style={[]}>
          <Image source={{ uri: book.image }} style={[styles.image, tw``]} />
          <View style={[tw`p-5`]}>
            <Text
              style={[
                tw`mb-2 text-xl tracking-tight text-gray-900 dark:text-white`,
                styles.title,
              ]}
            >
              {book.title}
            </Text>
            <Text
              style={[tw`mb-2   text-gray-900 dark:text-white`, styles.italic]}
            >
              by {book.author}
            </Text>
            <View
              style={[
                tw`bg-${Theme.themeColor}-200  px-3 py-2 text-sm font-semibold  mr-2 mb-2`,
                styles.genre,
              ]}
            >
              <Text style={[tw`text-gray-700`, styles.text]}>
                <Ionicons name="pricetag" color="gray" /> {book.genre}
              </Text>
            </View>

            <Text style={[tw``, styles.text]}>
              <Text style={[styles.title]}>Publication : </Text>
              {book.publication}
            </Text>

            <Text style={[tw``, styles.text]}>
              <Text style={[styles.title]}>Type : </Text>
              {book.type}
            </Text>

            <Text style={[tw``, styles.text]}>
              <Text style={[styles.title]}>Status : </Text>
              {book.status}
            </Text>

            <Text style={[tw``, styles.text]}>
              <Text style={[styles.title]}>Published On : </Text>
              {book.year}
            </Text>

            <Text style={[tw``, styles.text]}>
              <Text style={[styles.title]}>Availability : </Text>
              {book.availability}
            </Text>
            <Text style={[tw``, styles.text]}>
              <Text style={[styles.title]}>Rank : </Text>
              {book.rank}
            </Text>

            <Text>
              <Text style={[styles.title]}>Rating: </Text>
              {book.rating ? (
                <Text>{book.rating}/5</Text>
              ) : (
                <Text style={styles.text}>N/A</Text>
              )}
            </Text>
            {book.reviews && <Reviews reviews={book.reviews} />}
          </View>
        </ScrollView>
      ) : (
        <View style={[styles.image, tw``]}>
          <Text>Bal hoise</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  genre: {
    borderRadius: 10,
  },
  image: {
    height: 350,
  },
  title: {
    fontFamily: "app-font-bold",
  },
  italic: {
    fontFamily: "app-font-italic",
  },
  text: {
    fontFamily: "app-font-regular",
  },
});

export default BookDetailsScreen;
