import { StyleSheet, FlatList } from "react-native";
import { useEffect } from "react";

import { AppText } from "../components/AppText";
import { AppButton } from "../components/AppButton";
import { LoadingScreen } from "../components/Loading";
import { SafeScreen } from "../components/SafeScreen";
import { Card } from "../components/Card";
import routes from "../components/router/routes";

import apiListings from "../api/lisitings";
import useApi from "../hooks/useApi";

const Lisitng = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(apiListings.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <SafeScreen style={styles.container}>
      {error && (
        <>
          <AppText>Couldn't retrive the lisitings</AppText>
          <AppButton title="Retry" onPress={() => loadListings()} />
        </>
      )}
      {loading && <LoadingScreen visible={loading} />}
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subTitle={`${item.price} $`}
            imagePath={{ uri: item.images[0].url }}
            thumbnailUrl={item.images[0].thumbnailUrl}
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
