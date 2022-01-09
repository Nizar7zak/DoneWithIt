import client from "./client";

const endPoint = "/listings";

const getListings = () => client.get(endPoint);

const addListing = (lisitng, uploadProgress) => {
  const data = new FormData();
  data.append("title", lisitng.title);
  data.append("price", lisitng.price);
  data.append("categoryId", lisitng.category.id);
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

  return client.post(endPoint, data, {
    onUploadProgress: (progress) =>
      uploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListing,
};
