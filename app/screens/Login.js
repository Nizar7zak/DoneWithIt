import { StyleSheet } from "react-native";
import { Formik } from "formik";

import { SafeScreen } from "../components/SafeScreen";
import { AppImage } from "../components/AppImage";
import { AppTextInput } from "../components/AppTextInput";
import { AppButton } from "../components/AppButton";

const Login = () => {
  return (
    <SafeScreen style={styles.container}>
      <AppImage
        imageStyle={styles.logo}
        imagePath={require("../assets/logo.png")}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              placeholder="Email"
              iconName="email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            <AppTextInput
              placeholder="Password"
              iconName="lock"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            <AppButton title="login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
