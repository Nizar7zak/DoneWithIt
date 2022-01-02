import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import { SafeScreen } from "../components/SafeScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const items = [
  { label: "c1", value: "1" },
  { label: "c2", value: "2" },
  { label: "c3", value: "3" },
  { label: "c4", value: "4" },
];

const ListingEdit = () => {
  return (
    <SafeScreen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />

        <AppFormField
          name="price"
          placeholder="Price $"
          keyboardType="numeric"
          maxLength={8}
        />

        <AppFormPicker items={items} name="category" placeholder="Category" />

        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          maxLength={255}
          numberOfLines={3}
        />
        <SubmitButton title="post" />
      </AppForm>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ListingEdit;
