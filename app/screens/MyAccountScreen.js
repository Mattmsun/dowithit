import React from "react";
import SimpleListItem from "../components/SimpleListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import IconListItem from "../components/IconListItem";
import { StyleSheet, View } from "react-native";
import ListItemSeparator from "../components/ListItemSeparator";
const MyAccountScreen = () => {
  return (
    <Screen extraStyle={{ backgroundColor: colors.light }}>
      <SimpleListItem
        title="Mosh"
        subTitle="mattmsun@gmail.com"
        image={require("../assets/mosh.jpg")}
      />
      <View style={{ paddingTop: 40, paddingBottom: 20 }}>
        <IconListItem
          iconName="format-list-bulleted"
          title="My Listing"
          iconBg={colors.primary}
        />
        <ListItemSeparator />
        <IconListItem
          iconName="email"
          title="My Messages"
          iconBg={colors.secondary}
        />
      </View>
      <IconListItem iconName="logout" title="Log Out" iconBg={colors.warning} />
    </Screen>
  );
};
const styles = StyleSheet.create({});
export default MyAccountScreen;
