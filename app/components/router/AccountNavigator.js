import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../../screens/Account";
import Messages from "../../screens/Messages";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};
