import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Screen = ({ children, extraStyle }) => {
  return (
    <SafeAreaView style={{ ...styles.screen, ...extraStyle }}>
      <View style={[styles.view, extraStyle]}>{children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
export default Screen;
