import React from "react";
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import colors from "../config/colors";

const SimpleListItem = ({ image, title, subTitle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        backgroundColor: colors.white,
      }}
    >
      <Image style={styles.avatar} source={image} />
      <View style={{ marginLeft: 20 }}>
        <Text>{title}</Text>
        <Text style={{ color: colors.medium }}>{subTitle}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
export default SimpleListItem;
