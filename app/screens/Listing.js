import { StyleSheet, FlatList } from "react-native";

import { SafeScreen } from "../components/SafeScreen";
import { Card } from "../components/Card";
import fakeData from "../project/data/fakeData";

const Lisitng = () => {
  return (
    <SafeScreen style={styles.container}>
      <FlatList
        data={fakeData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
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
    paddingHorizontal: 20,
  },
});

export default Lisitng;
