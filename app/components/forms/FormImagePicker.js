import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import ImageInputList from "../ImageInputList";

const FormImagePicker = ({ name, ...ortherProps }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={(uri) => {
          setFieldValue(name, [...values[name], uri]);
        }}
        onRemoveImage={(u) => {
          setFieldValue(
            name,
            values[name].filter((uri) => uri !== u)
          );
        }}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
