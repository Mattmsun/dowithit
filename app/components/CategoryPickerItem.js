import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import IconAvatar from "./IconAvatar";
import AppText from "./AppText";
const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IconAvatar
          size={70}
          iconName={item.icon}
          bgColor={item.backgroundColor}
        />
        <AppText style={styles.text}>{item.label}</AppText>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "30%",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
  },
});
export default CategoryPickerItem;
