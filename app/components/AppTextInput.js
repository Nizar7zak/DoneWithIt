import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/defaultStyles";

export const AppTextInput = ({ iconName, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconName}
        size={20}
        color={defaultStyles.colors.medium}
        style={styles.icon}
      />
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.grey,
    borderRadius: 35,
    marginTop: 50,
  },
  icon: {
    marginRight: 10,
  },
});
