import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Lisitng from "../../screens/Listing";
import ListingDetails from "../../screens/ListingDetails";

const Stack = createNativeStackNavigator();

export const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name="Lisitng" component={Lisitng} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
