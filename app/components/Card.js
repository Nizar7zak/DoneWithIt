import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

import { AppImage } from "./AppImage";
import { AppText } from "./AppText";

export const Card = ({ title, subTitle, imagePath, cardStyle = {} }) => {
  return (
    <View style={[styles.cardContainer, cardStyle]}>
      <AppImage imageStyle={styles.imageStyle} imagePath={imagePath} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 20,
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
