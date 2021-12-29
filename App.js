import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import ListingDetails from "./app/screens/ListingDetails"
import colors from "./app/config/colors";
export default function App() {
  return (
    <View style={styles.container}>
      <ListingDetails />
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
