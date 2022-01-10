import * as storageToken from "expo-secure-store";

const key = "authToken";

const setToken = async (token) => {
  try {
    await storageToken.setItemAsync(key, token);
  } catch (error) {
    console.log("Error Setting the auth Token", error);
  }
};

const getToken = async () => {
  try {
    return await storageToken.getItemAsync(key);
  } catch (error) {
    console.log("Error Getting the auth Token", error);
  }
};

const removeToken = async () => {
  try {
    return await storageToken.deleteItemAsync(key);
  } catch (error) {
    console.log("Error Deleting the auth Token", error);
  }
};

export default {
  setToken,
  getToken,
  removeToken,
};
