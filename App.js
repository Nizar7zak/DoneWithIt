import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Card } from "./app/components/Card";
import colors from "./app/config/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBarExpo style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grey,
  },
});
