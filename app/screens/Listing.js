import { StyleSheet, FlatList } from "react-native";

import { SafeScreen } from "../components/SafeScreen";
import { Card } from "../components/Card";
import fakeData from "../project/data/fakeData";

const Lisitng = ({ navigation }) => {
  return (
    <SafeScreen style={styles.container}>
      <FlatList
        data={fakeData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate("ListingDetails", item)}
            title={item.name}
            subTitle={`${item.price} $`}
            imagePath={item.image}
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
