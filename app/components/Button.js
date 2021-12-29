import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { Text } from "./Text";

const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text value={title} style={styles.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Button;
