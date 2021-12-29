import { ActivityIndicator, StyleSheet, View } from "react-native";
import colors from "../config/colors";

import { Text } from "./Text";

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#0000ff" size="large" />
      <Text
        color={colors.black}
        style={styles.loadingText}
        typography="h1"
        value="Loading..."
      />
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
