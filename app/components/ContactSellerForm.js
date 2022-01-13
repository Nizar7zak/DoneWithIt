import React from "react";
import { View, StyleSheet, Keyboard, Alert } from "react-native";
import * as Notifications from "expo-notifications";

import { AppForm, AppFormField, SubmitButton } from "./forms";
import messageSchema from "../project/schema/messageSchema";
import apiClient from "../api/client";

const ContactSellerForm = ({ listing }) => {
  const listingId = listing.id;

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();
    const result = await apiClient.post("/messages", { message, listingId });
    if (!result.ok) {
      return Alert.alert("Error", "Could not send the message to the user");
    }

    const content = {
      title: "Awesome!",
      body: "Your message was sent to the seller",
    };

    resetForm();
    Notifications.scheduleNotificationAsync({ content, trigger: null });
  };

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{ message: "" }}
        validationSchema={messageSchema}
        onSubmit={handleSubmit}
      >
        <AppFormField
          name="message"
          placeholder="Message..."
          multiline
          maxLength={255}
          numberOfLines={3}
        />
        <SubmitButton title="CONTACT SELLER" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ContactSellerForm;
