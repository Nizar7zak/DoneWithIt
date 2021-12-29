import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

const SafeScreen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
  },
});
export default SafeScreen;
