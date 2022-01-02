import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import colors from "./app/config/colors";
import SignUp from "./app/screens/SignUp";



export default function App() {
  return (
    <View style={styles.container}>
      <SignUp />
      <StatusBarExpo style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
