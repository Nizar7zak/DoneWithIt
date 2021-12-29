import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
const ImageView = () => {
  return (
    <View style={styles.viewImageContainer}>
      <View style={styles.buttonsContainer}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      </View>
      <Image source={require("../assets/view.png")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewImageContainer: {
    flex: 1,
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
  closeIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
  },
});

export default ImageView;
