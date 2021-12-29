import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

export const SafeScreen = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
