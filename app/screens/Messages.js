import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { ItemDeleteActions, ItemSeparator, ListItem } from "../components/lists";
import { SafeScreen } from "../components/SafeScreen";
import colors from "../config/colors";

const messagesData = [
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
  const [messages, setMessages] = useState(messagesData);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
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
            onPress={() => console.log("item Selected", item)}
            renderRightActions={() => (
              <ItemDeleteActions onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "hany",
              description: "Tschuss",
              image: require("../assets/user2.png"),
            },
          ])
        }
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
