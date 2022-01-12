import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as StatusBarExpo } from "expo-status-bar";

import colors from "./app/config/colors";
import { TabsNavigator } from "./app/components/router/TabsNavigator";
import { AuthNavigator } from "./app/components/router/AuthNavigator";
import navigationTheme from "./app/components/router/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/components/router/rootNavigation";

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) return setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);
  return (
    <View style={styles.container}>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />

        <NavigationContainer theme={navigationTheme} ref={navigationRef}>
          {user ? <TabsNavigator /> : <AuthNavigator />}
        </NavigationContainer>

        <StatusBarExpo style="auto" />
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
