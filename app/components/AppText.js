import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

function AppText({ children, style, ...ortherPorps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...ortherPorps}>
      {children}
    </Text>
  );
}

export default AppText;
