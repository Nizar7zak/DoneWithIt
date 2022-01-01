import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { AppPicker } from "./app/components/AppPicker";

import colors from "./app/config/colors";
export default function App() {
  return (
    <View style={styles.container}>
      <AppPicker placeholder="Category" iconName="apps" />
      
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
