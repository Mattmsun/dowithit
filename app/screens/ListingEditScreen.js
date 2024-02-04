import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";

import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please select at least one image"),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});
const categories = [
  {
    value: 1,
    label: "Furniture",
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  { value: 2, label: "Cars", backgroundColor: "#fd9644", icon: "car" },
  { value: 3, label: "Cameras", backgroundColor: "#fed330", icon: "camera" },
  { value: 4, label: "Games", backgroundColor: "#26de81", icon: "cards" },
  {
    value: 5,
    label: "Clothing",
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  { value: 6, label: "Sports", backgroundColor: "#45aaf2", icon: "basketball" },
  {
    value: 7,
    label: "Movies & Music",
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
];
const ListingEditScreen = () => {
  // const location = useLocation();

  return (
    <Screen extraStyle={styles.container}>
      <AppForm
        initialValues={{
          images: [],
          title: "",
          price: "",
          category: undefined,
          description: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <FormImagePicker name={"images"} />
        <AppFormField name={"title"} maxLength={255} placeholder="Title" />
        <AppFormField
          size="30%"
          name={"price"}
          keyboardType="numeric"
          maxLength={8}
          autoCorrect={false}
          placeholder="Price"
        />
        <AppFormPicker
          size="50%"
          name={"category"}
          placeholder={"Category"}
          items={categories}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          name={"description"}
          multiline
          maxLength={255}
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton
          textStyles={{ textTransform: "uppercase" }}
          title={"Post"}
        />
      </AppForm>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default ListingEditScreen;
