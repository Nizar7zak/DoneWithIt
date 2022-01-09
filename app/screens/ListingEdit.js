import { StyleSheet } from "react-native";
import { useState } from "react";

import { CategoryPickerItem } from "../components/CategoryPickerItem";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import { SafeScreen } from "../components/SafeScreen";
import useLocation from "../hooks/useLocation";
import icons from "../project/data/icons";
import listingEditSchema from "../project/schema/listingEditSchema";
import listingApi from "../api/lisitings";
import UploadScreen from "./UploadScreen";

const ListingEdit = () => {
  const location = useLocation();
  const [visibleUpload, setVisibleUpload] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing) => {
    setVisibleUpload(true);
    const result = await listingApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    setVisibleUpload(false);

    if (!result.ok) return alert("couldn't save the listings.");
    alert("Success!");
  };

  return (
    <SafeScreen style={styles.container}>
      <UploadScreen visible={visibleUpload} progress={progress} />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          image: [],
        }}
        validationSchema={listingEditSchema}
        onSubmit={handleSubmit}
      >
        <FormImagePicker name="image" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />

        <AppFormField
          name="price"
          placeholder="Price $"
          keyboardType="numeric"
          maxLength={8}
          width="30%"
        />

        <AppFormPicker
          items={icons}
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
