import { useState } from "react";
import { StyleSheet } from "react-native";

import { SafeScreen } from "../components/SafeScreen";
import { AppImage } from "../components/AppImage";
import { AppTextInput } from "../components/AppTextInput";
import { AppButton } from "../components/AppButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeScreen style={styles.container}>
      <AppImage
        imageStyle={styles.logo}
        imagePath={require("../assets/logo.png")}
      />
      <AppTextInput
        placeholder="Email"
        iconName="email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        placeholder="Password"
        iconName="lock"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry
        onChangeText={(text) => setEmail(text)}
      />
      <AppButton title="login" onPress={() => console.log(email, password)} />
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
