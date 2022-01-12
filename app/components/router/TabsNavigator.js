import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-location";

import { FeedNavigator } from "./FeedNavigator";
import { AccountNavigator } from "./AccountNavigator";
import ListingEdit from "../../screens/ListingEdit";
import NewlistingButton from "./NewlistingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();
  }, []);
  const registerForPushNotifications = async () => {
    try {
      const permissions = await Permissions.requestForegroundPermissionsAsync();
      if (!permissions.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token.data);
    } catch (error) {
      console.log(error);
    }
  };
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
