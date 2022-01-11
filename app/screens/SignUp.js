import { useState } from "react";
import { StyleSheet } from "react-native";

import { SafeScreen } from "../components/SafeScreen";
import { AppImage } from "../components/AppImage";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import signUpSchema from "../project/schema/signUpSchema";
import authentication from "../api/auth";
import useAuth from "../auth/useAuth";

const SignUp = () => {
  const [error, setError] = useState("");
  const auth = useAuth();

  const handleSubmit = async (userInfo) => {
    const response = await authentication.signup(userInfo);

    if (!response.ok) {
      if (response.data) {
        setError(response.data.error);
      } else {
        setError("An unexpected error occurred");
        console.log(response);
      }
      return;
    }

    const {data: authToken} = await authentication.login(userInfo.email, userInfo.password);
    auth.logIn(authToken);
  };

  return (
    <SafeScreen style={styles.container}>
      <AppImage
        imageStyle={styles.logo}
        imagePath={require("../assets/logo.png")}
      />
      <ErrorMessage error={error} />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        <AppFormField
          name="name"
          placeholder="Name"
          iconName="face-profile"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          name="email"
          placeholder="Email"
          iconName="email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          placeholder="Password"
          iconName="lock"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="sign up" />
      </AppForm>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  logo: {
    width: 85,
    height: 85,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default SignUp;
