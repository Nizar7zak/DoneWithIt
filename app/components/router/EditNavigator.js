import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingEdit from "../../screens/ListingEdit";

const Stack = createNativeStackNavigator();

export const EditNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ListingEdit}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
