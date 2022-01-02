import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import colors from "./app/config/colors";
import Messages from './app/screens/Messages'
export default function App() {
  return (
    <View style={styles.container}>
      <Messages />
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
