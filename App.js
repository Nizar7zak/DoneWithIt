import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import colors from "./app/config/colors";
import Messages from "./app/screens/Messages";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>

<Messages />
      <StatusBarExpo style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.grey,
  },
});
