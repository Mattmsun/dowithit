import React from "react";
import { View } from "react-native";
import colors from "../config/colors";
import { StyleSheet } from "react-native";
const ListItemSeparator = () => {
  return <View style={styles.separator} />;
};
const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: colors.light,
  },
});
export default ListItemSeparator;
