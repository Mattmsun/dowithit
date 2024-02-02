import React from "react";
import { Image, TouchableHighlight, View } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../AppText";

const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  showChevrons = false,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View
            style={{ flexDirection: "row", padding: 20, alignItems: "center" }}
          >
            <Image style={styles.avatar} source={image} />
            <View style={{ marginLeft: 20, flex: 1 }}>
              <AppText numberOfLines={1}>{title}</AppText>
              <AppText style={styles.subTitle} numberOfLines={3}>
                {subTitle}
              </AppText>
            </View>
            {showChevrons ? (
              <MaterialCommunityIcons
                name={"chevron-right"}
                size={30}
                color={colors.medium}
              />
            ) : null}
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

  subTitle: {
    color: colors.medium,
  },
});
export default ListItem;
