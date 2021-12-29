import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import Account from "./app/screens/Account";
import colors from "./app/config/colors";
export default function App() {
  return (
    <View style={styles.container}>
      <Account />
      <StatusBarExpo style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
  },
});
