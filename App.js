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
  Button,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import colors from "./app/config/colors";
import ListDetailScreen from "./app/screens/ListDetailScreen";
import Card from "./app/components/Card";
import MessageScreen from "./app/screens/MessageScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListScreen from "./app/screens/ListScreen";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import { useEffect, useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconAvatar from "./app/components/IconAvatar";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };
  const netInfo = useNetInfo();

  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
