import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { AppImage } from "./AppImage";
import { AppText } from "./AppText";

export const ListItem = ({ title, subTitle, imagePath }) => {
  return (
    <View style={styles.container}>
      <AppImage imagePath={imagePath} imageStyle={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText value={title} style={styles.title} />
        <AppText value={subTitle} style={styles.subTitle} typography="p2" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 10,
  },
  detailsContainer: {
    height: 70,
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
