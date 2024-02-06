import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const postListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);
  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );
  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  const config = {
    onUploadProgress: function (progressEvent) {
      console.log("hello");
      const { loaded, total } = progressEvent;
      var percentCompleted = Math.round((loaded * 100) / total);
      onUploadProgress(percentCompleted);
      // console.log(progressEvent);
      //   dispatch(updateImageUploadProgress(loaded, total));
    },

    headers: { "Content-Type": "multipart/form-data" },
  };
  return client.post(endpoint, data, config);
};

export default {
  getListings,
  postListing,
};
