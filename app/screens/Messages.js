import { FlatList } from "react-native";
import { ListItem } from "../components/ListItem";
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
    <FlatList
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
  );
};

export default Messages;
