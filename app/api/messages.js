import apiClient from "./client";

const messageEndPoint = "/messages";

const send = (message, listingId) => {
  apiClient.post(messageEndPoint, {
    message,
    listingId,
  });
};

export default {
  send,
};
