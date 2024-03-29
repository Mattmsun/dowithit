import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";
import Button from "../components/Button";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={{ marginTop: 30, fontSize: 20 }}>
          Sell What You Don't Need
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="primary"
          title={"Login"}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />

        <Button
          color="secondary"
          title={"Register"}
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 10,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: "15%",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
export default WelcomeScreen;
