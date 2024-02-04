import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();
export default () => (
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
