import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

const Button = ({ title, color = "primary", onPress }) => {
  const styles = StyleSheet.create({
    button: {
      width: "100%",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors[color],
      textTransform: "uppercase",
      padding: 15,
      marginVertical: 10,
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ color: colors.white, fontSize: 18, fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
