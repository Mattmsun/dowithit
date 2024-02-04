import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyAccountScreen from "../screens/MyAccountScreen";
import MessageScreen from "../screens/MessageScreen";
import routes from "./routes";

const Account = createNativeStackNavigator();
export default () => (
  <Account.Navigator>
    <Account.Screen name={routes.ACCOUNT} component={MyAccountScreen} />
    <Account.Screen name={routes.MESSAGE} component={MessageScreen} />
  </Account.Navigator>
);
