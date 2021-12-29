import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { AppImage } from "../components/AppImage";
import colors from "../config/colors";

const ImageView = () => {
  return (
    <View style={styles.viewImageContainer}>
      <View style={styles.buttonsContainer}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={30} />
        </View>
        <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="delete" color="white" size={30} />

        </View>
      </View>
      <AppImage
        imagePath={require("../assets/view.png")}
        imageStyle={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewImageContainer: {
    width:"100%",
    height:"100%",
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
    top: 5,
  },
  image: {
    height: "73%",
    width: "100%",
  },
});

export default ImageView;
