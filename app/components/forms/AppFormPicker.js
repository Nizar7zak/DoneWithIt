import { useFormikContext } from "formik";

import { ErrorMessage } from "./ErrorMessage";
import { AppPicker } from "../AppPicker";

export const AppFormPicker = ({ items, name, placeholder }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  return (
    <>
      <AppPicker
        placeholder={placeholder}
        categories={items}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};