import { useFormikContext } from "formik";

import { ErrorMessage } from "./ErrorMessage";
import { AppPicker } from "../AppPicker";

export const AppFormPicker = ({ items, name, PickerItemComponent, numberOfColumns, placeholder, width }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  return (
    <>
      <AppPicker
        placeholder={placeholder}
        categories={items}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
