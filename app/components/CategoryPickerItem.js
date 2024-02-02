import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import IconAvatar from "./IconAvatar";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <IconAvatar
        size={70}
        iconName={item.icon}
        bgColor={item.backgroundColor}
      />
      <AppText style={styles.text}>{item.label}</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    maxWidth: "33%",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
  },
});
export default CategoryPickerItem;
