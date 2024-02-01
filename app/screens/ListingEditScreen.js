import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";

import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});
const categories = [
  { value: 1, label: "clothing" },
  { value: 2, label: "Furniture" },
  { value: 3, label: "toys" },
];
const ListingEditScreen = () => {
  return (
    <Screen extraStyle={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField name={"title"} maxLength={255} placeholder="Title" />
        <AppFormField
          name={"price"}
          keyboardType="numeric"
          maxLength={8}
          autoCorrect={false}
          placeholder="Price"
        />
        <AppFormPicker
          name={"category"}
          placeholder={"Category"}
          items={categories}
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
