import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import colors from "./app/config/colors";
import ListingEdit from "./app/screens/ListingEdit";
export default function App() {
  return (
    <View style={styles.container}>
      <ListingEdit />
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
