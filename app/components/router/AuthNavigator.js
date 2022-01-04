import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import Welcome from "../../screens/Welcome";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerBackTitle: "Welcome" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Sign Up", headerBackTitle: "Welcome" }}
      />
    </Stack.Navigator>
  );
};
