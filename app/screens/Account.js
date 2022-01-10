import { useContext } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import { Icon } from "../components/Icon";
import { SafeScreen } from "../components/SafeScreen";
import { ListItem, ItemSeparator } from "../components/lists";
import ItemsAccountScreen from "../project/data/ItemsAccountScreen";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const Account = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };
  return (
    <SafeScreen>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          imagePath={require("../assets/user1.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={ItemsAccountScreen}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate(item.targertScreen)}
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
        onPress={handleLogout}
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
