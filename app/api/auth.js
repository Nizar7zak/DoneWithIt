import apiClient from "./client";

const authenticationEndPoint = "/auth";
const signUpEndPoint = "/users";
const login = (email, password) =>
  apiClient.post(authenticationEndPoint, { email, password });

const signup = (userInfo) =>
  apiClient.post(signUpEndPoint, userInfo);

export default {
  login,
  signup,
};
