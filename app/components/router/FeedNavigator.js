import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Lisitng from "../../screens/Listing";

const Stack = createNativeStackNavigator();

export const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Lisitng}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
