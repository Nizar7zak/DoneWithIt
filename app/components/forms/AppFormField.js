import { useFormikContext } from "formik";

import { AppTextInput } from "../AppTextInput";
import { ErrorMessage } from "./ErrorMessage"

export const AppFormField = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
