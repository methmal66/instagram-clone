const init = [];

const downloadPosts = (state = init, action) => {
  switch (action.type) {
    case "DOWNLOAD_POSTS":
      return action.payload.map((doc) => ({
        id: doc.id,
        post: doc.data(),
      }));

    default:
      return state;
  }
};

export default downloadPosts;
