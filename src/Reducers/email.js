const init = "";

const email = (state = init, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return action.payload;

    case "CLEAR_EMAIL":
      return null;

    default:
      return state;
  }
};

export default email;
