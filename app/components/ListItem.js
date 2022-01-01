import { View, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import { AppImage } from "./AppImage";
import { AppText } from "./AppText";

export const ListItem = ({
  title,
  subTitle,
  imagePath,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.grey} onPress={onPress}>
        <View style={styles.listItem}>
          {IconComponent}
          {imagePath && (
            <AppImage imagePath={imagePath} imageStyle={styles.image} />
          )}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && (
              <AppText style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    height: 70,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
