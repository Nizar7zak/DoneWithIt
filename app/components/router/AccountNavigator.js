import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../../screens/Account";
import Messages from "../../screens/Messages";
import routes from "./routes";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.ACCOUNT2} component={Account} />
      <Stack.Screen name={routes.MESSAGES} component={Messages} />
    </Stack.Navigator>
  );
};
