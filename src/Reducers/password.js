const init = "";

const password = (state = init, action) => {
  switch (action.type) {
    case "SET_PASSWORD":
      return action.payload;

    case "CLEAR_PASSWORD":
      return null;

    default:
      return state;
  }
};

export default password;
