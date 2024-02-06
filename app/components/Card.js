import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../config/colors";

const Card = ({ title, subtitle, imageUrl, extraStyle, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ ...styles.cardContainer, ...extraStyle }}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    overflow: "hidden",
    width: "100%",
    height: 250,
    alignItems: "flex-start",
    backgroundColor: colors.white,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 20,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "60%",
  },
  title: {
    fontSize: 18,
    margin: 10,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 18,
    marginLeft: 20,
    color: colors.secondary,
  },
});

export default Card;
