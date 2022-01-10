import apiClient from "./client";

const authenticationEndPoint = "/auth";
const login = (email, password) =>
  apiClient.post(authenticationEndPoint, { email, password });

export default {
  login,
};
