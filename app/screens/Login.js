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
import loginSchema from "../project/schema/loginSchema";
import authLogin from "../api/auth";
import useAuth from "../auth/useAuth";

const Login = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const [error, setError] = useState("");
  const { logIn } = useAuth();

  const handleSubmit = async ({ email, password }) => {
    const result = await authLogin.login(email, password);
    if (!result.ok) {
      setLoginFailed(true);
      setError(result.data.error);
    }
    setLoginFailed(false);
    logIn(result.data);
  };
  return (
    <SafeScreen style={styles.container}>
      <AppImage
        imageStyle={styles.logo}
        imagePath={require("../assets/logo.png")}
      />
      <ErrorMessage error={error} visible={loginFailed} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
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
        <SubmitButton title="login" />
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

export default Login;
