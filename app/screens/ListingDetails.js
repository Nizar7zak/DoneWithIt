import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import { AppText } from "../components/AppText";
import { ListItem } from "../components/lists";
import colors from "../config/colors";

const ListingDetails = ({ route }) => {
  const item = route.params;
  return (
    <View style={styles.listingContainer}>
      <Image
        style={styles.imageStyle}
        uri={item.images[0].url}
        preview={{ uri: item.images[0].thumbnailUrl }}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.subTitle}>{`${item.price} $`}</AppText>
      </View>

      <ListItem
        style={styles.userContainer}
        title="Nizar Zakout"
        subTitle="5 Items"
        imagePath={require("../assets/user1.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listingContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  imageStyle: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginVertical: 10,
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 50,
  },
});
export default ListingDetails;
