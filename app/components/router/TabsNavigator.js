import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FeedNavigator } from "./FeedNavigator";
import { AccountNavigator } from "./AccountNavigator";
import ListingEdit from "../../screens/ListingEdit";
import NewlistingButton from "./NewlistingButton";
import routes from "./routes";
import useNotification from "../../hooks/useNotification";
import { navigate } from "./rootNavigation";

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  const notificationListener = () => {
    navigate(routes.ACCOUNT);
  };
  useNotification(notificationListener);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEdit}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewlistingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
