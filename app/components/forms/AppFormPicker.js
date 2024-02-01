import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";

const AppFormPicker = ({ name, ...ortherProps }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        {...ortherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
