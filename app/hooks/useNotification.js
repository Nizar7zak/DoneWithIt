import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-location";

import expoPushToken from "../api/expoPushToken";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener(notificationListener);
  }, []);
  const registerForPushNotifications = async () => {
    try {
      const permissions = await Permissions.requestForegroundPermissionsAsync();
      if (!permissions.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushToken.register(token.data);
    } catch (error) {
      console.log(error);
    }
  };
};
