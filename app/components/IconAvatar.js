import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

const IconAvatar = ({ size, bgColor, iconName }) => {
  const styles = StyleSheet.create({
    avatar: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: bgColor,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.avatar}>
      <MaterialCommunityIcons
        name={iconName}
        size={size / 2}
        color={colors.white}
      />
    </View>
  );
};

export default IconAvatar;
