const init = "";

const progress = (state = init, action) => {
  switch (action.type) {
    case "SET_PROGRESS":
      return action.payload;

    case "CLEAR_PROGRESS":
      return null;

    default:
      return state;
  }
};

export default progress;
