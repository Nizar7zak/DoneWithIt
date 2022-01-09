import { StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";

import { AppText } from "../components/AppText";
import { AppButton } from "../components/AppButton";
import { LoadingScreen } from "../components/Loading";
import { SafeScreen } from "../components/SafeScreen";
import { Card } from "../components/Card";
import apiListings from "../api/lisitings";
import routes from "../components/router/routes";

const Lisitng = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await apiListings.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <SafeScreen style={styles.container}>
      {error && (
        <>
          <AppText>Couldn't retrive the lisitings</AppText>
          <AppButton title="Retry" onPress={() => loadListings()} />
        </>
      )}
      {loading && <LoadingScreen />}
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subTitle={`${item.price} $`}
            imagePath={{ uri: item.images[0].url }}
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
