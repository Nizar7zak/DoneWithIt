import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import Listing from "./app/screens/Listing";
import colors from "./app/config/colors";
export default function App() {
  return (
    <View style={styles.container}>
      <Listing />
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
