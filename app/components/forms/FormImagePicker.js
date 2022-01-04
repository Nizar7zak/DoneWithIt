import { useFormikContext } from "formik";

import { ErrorMessage } from "./ErrorMessage";
import ImageInputList from "../ImageInputList";


const FormImagePicker = ({ name }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        urisImage={values[name]}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
