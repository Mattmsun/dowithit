const { Platform } = require("react-native");
const { default: colors } = require("./colors");
export default {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
};
