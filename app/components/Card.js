import React from "react";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../config/colors";

const Card = ({ title, subtitle, image, extraStyle }) => {
  return (
    <View style={{ ...styles.cardContainer, ...extraStyle }}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    overflow: "hidden",
    width: "100%",
    height: 300,
    alignItems: "flex-start",
    backgroundColor: colors.white,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 20,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "80%",
  },
  title: {
    fontSize: 15,
    margin: 10,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 15,
    marginLeft: 20,
    color: colors.secondary,
  },
});

export default Card;
