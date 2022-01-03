import { View, StyleSheet } from "react-native";
import { AppText } from "./AppText";
import { Icon } from "./Icon";

export const CategoryPickerItem = ({item, onPress}) => {
  return <View style={styles.container}>
    <Icon size={70} backgroundColor={item.backgroundColor} name={item.icon} />
    <AppText style={styles.label}> {item.label} </AppText>

  </View>;
};

const styles = StyleSheet.create({
  container:{
    width: "33%",
    paddingVertical: 15,
    alignItems: "center",

  },
  label: {
    marginTop: 5,
    textAlign: "center"
  }
})