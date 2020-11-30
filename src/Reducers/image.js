const init = {};

const image = (state = init, action) => {
  switch (action.type) {
    case "SET_IMAGE":
      return action.payload;

    default:
      return state;
  }
};

export default image;
