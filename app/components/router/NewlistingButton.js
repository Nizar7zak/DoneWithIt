import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const NewlistingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
      <MaterialCommunityIcons
        color={colors.white}
        size={40}
        name="plus-circle"
      />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 8,
    backgroundColor: colors.primary,
    bottom: 30,
  },
});

export default NewlistingButton;
