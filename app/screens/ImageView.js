import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppImage } from "../components/AppImage";
import colors from "../config/colors";
import { SafeScreen } from "../components/SafeScreen";

const ImageView = () => {
  return (
    <SafeScreen>
      <View style={styles.viewImageContainer}>
        <View style={styles.buttonsContainer}>
          <MaterialCommunityIcons name="close" color="white" size={30} />
          <MaterialCommunityIcons name="delete" color="white" size={30} />
        </View>
        <AppImage
          imagePath={require("../assets/view.png")}
          imageStyle={styles.image}
        />
      </View>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  viewImageContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  buttonsContainer: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 10,
  },
  image: {
    height: "73%",
    width: "100%",
  },
});

export default ImageView;
