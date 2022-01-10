import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Apploading} from "expo"
import { StatusBar as StatusBarExpo } from "expo-status-bar";
import jwtDecode from "jwt-decode";

import colors from "./app/config/colors";
import { TabsNavigator } from "./app/components/router/TabsNavigator";
import { AuthNavigator } from "./app/components/router/AuthNavigator";
import navigationTheme from "./app/components/router/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };
  useEffect(() => {
    restoreToken();
  }, []);
  return (
    <View style={styles.container}>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />

        <NavigationContainer theme={navigationTheme}>
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
