import { View, StyleSheet } from "react-native";
import { AppImage } from "../components/AppImage";
import { AppText } from "../components/AppText";
import { ListItem } from "../components/ListItem";
import colors from "../config/colors";

const ListingDetails = () => {
  return (
    <View style={styles.listingContainer}>
      <AppImage
        imageStyle={styles.imageStyle}
        imagePath={require("../assets/example.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText value="Hello Jake" style={styles.title} />
        <AppText value="50" style={styles.subTitle} />
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
    width: "100%",
    height: "100%",
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
