import { StyleSheet, FlatList } from "react-native";

import { SafeScreen } from "../components/SafeScreen";
import { Card } from "../components/Card";

const data = [
  {
    id: 1,
    name: "Bed",
    image: require("../assets/bed.jpg"),
    price: 500,
  },
  {
    id: 2,
    name: "bycle",
    image: require("../assets/bycle.jpg"),
    price: 800,
  },
  {
    id: 3,
    name: "sofa",
    image: require("../assets/sofa.jpg"),
    price: 750,
  },
];
const Lisitng = () => {
  return (
    <SafeScreen style={styles.container}>
      <FlatList
        data={data}
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
