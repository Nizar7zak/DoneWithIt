import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

export const SafeScreen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view:{
    flex: 1
  }
});
