import { StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { SafeScreen } from "../components/SafeScreen";
import { AppImage } from "../components/AppImage";
import { AppTextInput } from "../components/AppTextInput";
import { AppButton } from "../components/AppButton";
import { AppText } from "../components/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(8)
    .matches(
      /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/,
      "Password must contain at least 8 characters, one uppercase, one lower case, one number and one special case character"
    )
    .label("Password"),
});
const Login = () => {
  return (
    <SafeScreen style={styles.container}>
      <AppImage
        imageStyle={styles.logo}
        imagePath={require("../assets/logo.png")}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
        
      >
        {({ handleChange, handleSubmit, errors }) => (
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
            <AppText style={{color:"red"}}>{errors.email}</AppText>
            <AppTextInput
              placeholder="Password"
              iconName="lock"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            <AppText style={{color:"red"}}>{errors.password}</AppText>
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
