import { StyleSheet, FlatList, View } from "react-native";

import { Icon } from "../components/Icon";
import { ItemSeparator } from "../components/ItemSperator";
import { SafeScreen } from "../components/SafeScreen";
import { ListItem } from "../components/ListItem";
import colors from "../config/colors";

const menuItem = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const Account = () => {
  return (
    <SafeScreen>
      <View style={styles.container}>
        <ListItem
          title="Nizar Zakout"
          subTitle="nizar7zakout@gmail.com"
          imagePath={require("../assets/user1.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default Account;
