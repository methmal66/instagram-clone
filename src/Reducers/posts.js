const init = [];

const downloadPosts = (state = init, action) => {
  switch (action.type) {
    case "DOWNLOAD_POSTS":
      const posts = action.payload.map((document) => ({
        key: document.id,
        id: document.id,
        data: document.data(),
      }));
      return posts;

    default:
      return state;
  }
};

export default downloadPosts;
