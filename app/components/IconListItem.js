import React from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const IconListItem = ({ iconName, title, iconBg }) => {
  const styles = StyleSheet.create({
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: iconBg,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 20,
        alignItems: "center",

        backgroundColor: colors.white,
      }}
    >
      <View style={styles.avatar}>
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={colors.white}
        />
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default IconListItem;
