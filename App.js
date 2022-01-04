import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import colors from "./app/config/colors";
import { TabsNavigator } from "./app/components/router/TabsNavigator";
import { AuthNavigator } from "./app/components/router/AuthNavigator";
import navigationTheme from "./app/components/router/navigationTheme";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
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
