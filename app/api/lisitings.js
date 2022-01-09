import client from "./client";

const endPoint = "/listings";

const getListings = () => client.get(endPoint);

const addListing = (lisitng) => {
  const data = new FormData();
  data.append("title", lisitng.title);
  data.append("price", lisitng.price);
  data.append("categoryId", lisitng.category.value);
  data.append("description", lisitng.description);

  lisitng.image.forEach((photo, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: photo,
    });
  });
  if (lisitng.location)
    data.append("location", JSON.stringify(lisitng.location));

  return client.post(endPoint, data);
};

export default {
  getListings,
  addListing,
};
