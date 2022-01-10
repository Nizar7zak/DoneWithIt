import { View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import { AppText } from "./AppText";

export const Card = ({
  title,
  subTitle,
  imagePath,
  thumbnailUrl,
  onPress,
  cardStyle = {},
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.cardContainer, cardStyle]}>
        <Image
          style={styles.imageStyle}
          uri={imagePath.uri}
          preview={{ uri: thumbnailUrl }}
          tint="light"
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
