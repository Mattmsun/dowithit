import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import Screen from "./Screen";

const ActivityIndicator = ({ visible = false }) => {
  const animation = useRef(null);

  if (!visible) return null;
  return (
    <Screen extraStyle={{ alignItems: "center", justifyContent: "center" }}>
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
    </Screen>
  );
};

export default ActivityIndicator;
