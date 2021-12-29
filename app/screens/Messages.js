import { FlatList, StyleSheet } from "react-native";
import { ListItem } from "../components/ListItem";
import SafeScreen from "../components/SafeScreen";
const messages = [
  {
    id: 1,
    title: "nizar",
    description: "Heey",
    image: require("../assets/user1.jpg"),
  },
  {
    id: 2,
    title: "hany",
    description: "Tschuss",
    image: require("../assets/user2.png"),
  },
];

const Messages = () => {
  return (
    <SafeScreen>
      <FlatList
        style={styles.messages}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            imagePath={item.image}
          />
        )}
      />
    </SafeScreen>
  );
};
const styles = StyleSheet.create({
  messages: {
    backgroundColor: "#f1f1f1",
  },
});

export default Messages;
