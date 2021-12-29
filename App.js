import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import Welcome from "./app/screens/Welcome";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Welcome />
      <StatusBarExpo style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
