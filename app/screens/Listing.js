import { StyleSheet, FlatList } from "react-native";

import { SafeScreen } from "../components/SafeScreen";
import { Card } from "../components/Card";
// import fakeData from "../project/data/fakeData";
import apiListings from "../api/lisitings";
import routes from "../components/router/routes";
import { useEffect, useState } from "react";

const Lisitng = ({ navigation }) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const { data } = await apiListings.getListings();
    setListings(data);
  };

  return (
    <SafeScreen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subTitle={`${item.price} $`}
            imagePath={{uri : item.images[0].url}}
          />
        )}
      />
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default Lisitng;
