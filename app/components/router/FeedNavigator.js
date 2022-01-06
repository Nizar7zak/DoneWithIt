import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Lisitng from "../../screens/Listing";
import ListingDetails from "../../screens/ListingDetails";
import routes from "./routes";

const Stack = createNativeStackNavigator();

export const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ presentation: "modal", headerShown: false }}>
      <Stack.Screen name={routes.LISTINGS} component={Lisitng} />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetails}
      />
    </Stack.Navigator>
  );
};
