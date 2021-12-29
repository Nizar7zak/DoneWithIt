import { View, ImageBackground, StyleSheet } from "react-native";
import colors from "../config/colors";
import { Text } from "../components/Text";
import Button from "../components/Button";
import { AppImage } from "../components/Image";
const Welcome = () => {
  return (
    <ImageBackground
      blurRadius={12}
      source={require("../assets/welcome.jpg")}
      style={styles.imageContainer}
    >
      <View style={styles.logoContainer}>
        <AppImage
          imageStyle={styles.imageLogo}
          imagePath={require("../assets/logo.png")}
        />
        <Text value="Sell what you don't need" style={styles.tagLine} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="login" style={styles.loginButton} />
        <Button title="sign up" style={styles.signupButton} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 40,
  },
  imageLogo: {
    height: 90,
    width: 90,
  },
  buttonsContainer: {
    width: "90%",
  },
  loginButton: {
    backgroundColor: colors.primary,
  },
  signupButton: {
    backgroundColor: colors.secondary,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default Welcome;
