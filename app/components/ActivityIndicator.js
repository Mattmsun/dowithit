import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import Screen from "./Screen";
import { StyleSheet, View } from "react-native";

const ActivityIndicator = ({ visible = false }) => {
  const animation = useRef(null);

  if (!visible) return null;
  return (
    // <Screen extraStyle={{ alignItems: "center", justifyContent: "center" }}>
    <View style={styles.overlay}>
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        autoPlay
        loop
        source={require("../assets/animations/loading.json")}
      />
    </View>

    // </Screen>
  );
};
const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    opacity: 0.8,
    alignItems: "center",
    zIndex: 1,
  },
});
export default ActivityIndicator;
