const init = [];

const comments = (state = init, action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return action.payload.map((doc) => ({
        id: doc.id,
        comment: doc.data(),
      }));

    default:
      return state;
  }
};

export default comments;
