import React from "react";
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View
            style={{ flexDirection: "row", padding: 20, alignItems: "center" }}
          >
            <Image style={styles.avatar} source={image} />
            <View style={{ marginLeft: 20 }}>
              <Text>{title}</Text>
              <Text style={{ color: colors.medium }}>{subTitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
export default ListItem;
