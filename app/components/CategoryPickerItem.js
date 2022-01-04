import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { AppText } from "./AppText";
import { Icon } from "./Icon";

export const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon size={70} backgroundColor={item.backgroundColor} name={item.icon} />
      <AppText style={styles.label}> {item.label} </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 16,
  },
});
