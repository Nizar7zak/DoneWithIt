import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { CategoryPickerItem } from "../components/CategoryPickerItem";

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
  {
    label: "Furniture",
    value: "1",
    backgroundColor: "#FF3961",
    icon: "table-furniture",
  },
  { label: "Cars", value: "2", backgroundColor: "#ff8368", icon: "car" },
  { label: "Camera", value: "3", backgroundColor: "#FFD21A", icon: "camera" },
  {
    label: "Games",
    value: "4",
    backgroundColor: "#3ECE90",
    icon: "gamepad-square",
  },
  {
    label: "Clothing",
    value: "5",
    backgroundColor: "#34D7D1",
    icon: "shoe-heel",
  },
  {
    label: "Sports",
    value: "6",
    backgroundColor: "#368EFF",
    icon: "basketball",
  },
  {
    label: "Movies & Music",
    value: "7",
    backgroundColor: "#8470FF",
    icon: "music",
  },
  { label: "Books", value: "8", backgroundColor: "#D33FFF", icon: "book" },
  { label: "Others", value: "9", backgroundColor: "#B3B3B3", icon: "hand" },
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
          width="30%"
        />

        <AppFormPicker
          items={items}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          placeholder="Category"
          width="50%"
        />

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
