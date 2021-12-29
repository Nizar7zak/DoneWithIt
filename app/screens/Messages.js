import { FlatList, StyleSheet } from "react-native";

import { ItemSeparator } from "../components/ItemSperator";
import { ListItem } from "../components/ListItem";
import { SafeScreen } from "../components/SafeScreen";
import colors from "../config/colors";

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
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeScreen>
  );
};
const styles = StyleSheet.create({
  messages: {
    backgroundColor: colors.white,
  },
});

export default Messages;
