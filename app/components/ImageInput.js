import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };
  useEffect(() => {
    requestPermission();
  }, []);
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete the image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };
  const selectImage = async () => {
    if (imageUri) return setImageUri();
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("error reading an image", error);
    }
  };
  return (
    // <TouchableOpacity onPress={onChangeImage}>
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons
            name={"camera"}
            size={40}
            color={colors.medium}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    width: 80,
    height: 80,
    // padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginBottom: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    // marginHorizontal: 5,
    // marginBottom: 10,
    // borderRadius: 15,
  },
});
export default ImageInput;
