import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppImage } from "../components/AppImage";
import { SafeScreen } from "../components/SafeScreen";
import colors from "../config/colors";

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
    flex:1,
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
