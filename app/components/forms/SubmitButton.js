import React from "react";
import Button from "../Button";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, textStyles }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button textStyles={textStyles} title={title} onPress={handleSubmit} />
  );
};

export default SubmitButton;
