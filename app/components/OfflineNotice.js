import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import { AppText } from "./AppText";
import colors from "../config/colors";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  if (netInfo.type != "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  return null;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: Constants.statusBarHeight,
    backgroundColor: colors.primary,
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
