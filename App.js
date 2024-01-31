import { useDeviceOrientation } from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import colors from "./app/config/colors";
import Button from "./app/components/Button";
import ListDetailScreen from "./app/screens/ListDetailScreen";
import Card from "./app/components/Card";
import MessageScreen from "./app/screens/MessageScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListScreen from "./app/screens/ListScreen";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
}
