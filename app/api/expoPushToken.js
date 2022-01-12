import apiClient from "./client";

const pushTokenEndpoint = "/expoPushTokens";

const register = (expoPushToken) => {
  apiClient.post(pushTokenEndpoint, {
    token: expoPushToken,
  });
};

export default {
  register,
};
