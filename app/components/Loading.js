import { ActivityIndicator, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import { AppText } from "./AppText";

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#0000ff" size="large" />
      <AppText
        color={colors.black}
        style={styles.loadingText}
      >
        Loading...
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
  },
});
