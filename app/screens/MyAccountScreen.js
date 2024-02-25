import React from "react";
import SimpleListItem from "../components/SimpleListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import IconListItem from "../components/IconListItem";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";

const MyAccountScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  return (
    <Screen extraStyle={{ backgroundColor: colors.light }}>
      <SimpleListItem
        title={user.name}
        subTitle={user.email}
        image={require("../assets/mosh.jpg")}
      />
      <View style={{ paddingTop: 40, paddingBottom: 20 }}>
        <IconListItem
          iconName="format-list-bulleted"
          title="My Listing"
          iconBg={colors.primary}
        />
        <ListItemSeparator />
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.MESSAGE, { id: 1 })}
        >
          <IconListItem
            iconName="email"
            title="My Messages"
            iconBg={colors.secondary}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={logout}>
        <IconListItem
          iconName="logout"
          title="Log Out"
          iconBg={colors.warning}
        />
      </TouchableOpacity>
    </Screen>
  );
};
const styles = StyleSheet.create({});
export default MyAccountScreen;
