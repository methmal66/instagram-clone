const init = "";

const newComment = (state = init, action) => {
  switch (action.type) {
    case "SET_NEW_COMMENT":
      return action.payload;

    case "CLEAR_NEW_COMMENT":
      return null;

    default:
      return state;
  }
};

export default newComment;
