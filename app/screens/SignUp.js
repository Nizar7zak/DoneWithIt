import { StyleSheet } from "react-native";

import { SafeScreen } from "../components/SafeScreen";
import { AppImage } from "../components/AppImage";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import signUpSchema from "../project/schema/signUpSchema";

const SignUp = () => {
  return (
    <SafeScreen style={styles.container}>
      <AppImage
        imageStyle={styles.logo}
        imagePath={require("../assets/logo.png")}
      />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={signUpSchema}
        onSubmit={(values) => console.log(values)}
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
