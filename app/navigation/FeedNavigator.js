import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "../screens/ListScreen";
import ListDetailScreen from "../screens/ListDetailScreen";
import routes from "./routes";

const List = createNativeStackNavigator();
export default () => (
  <List.Navigator screenOptions={{ presentation: "modal", headerShown: false }}>
    <List.Screen name={routes.LISTING} component={ListScreen} />
    <List.Screen name={routes.LISTING_DETAILS} component={ListDetailScreen} />
  </List.Navigator>
);
