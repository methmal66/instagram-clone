const init = "";

const caption = (state = init, action) => {
  switch (action.type) {
    case "SET_CAPTION":
      return action.payload;

    default:
      return state;
  }
};

export default caption;
