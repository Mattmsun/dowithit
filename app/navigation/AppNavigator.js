import React, { useEffect, useState, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";
import { Constants } from "expo-constants";

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

export default () => {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);
  async function registerForPushNotificationsAsync() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("You need to enable permissions in order to receive notifications");
      return;
    }
  }

  return (
    <Tab.Navigator
      screenOptions={
        {
          //   tabBarActiveTintColor: "white",
          //   tabBarActiveBackgroundColor: "tomato",
          //   tabBarInactiveBackgroundColor: "#eee",
          //   tabBarInactiveTintColor: "black",
        }
      }
    >
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //     name="plus-circle"
          //     color={color}
          //     size={size}
          //   />
          // ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT_ROOT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          title: "Account",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
