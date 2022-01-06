import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import Welcome from "../../screens/Welcome";
import routes from "./routes";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.HOME}
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.LOGIN}
        component={Login}
        options={{ headerBackTitle: "Welcome" }}
      />
      <Stack.Screen
        name={routes.SIGN_UP}
        component={SignUp}
        options={{ title: "Sign Up", headerBackTitle: "Welcome" }}
      />
    </Stack.Navigator>
  );
};
