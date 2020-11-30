const init = {};

const user = (state = init, action) => {
  switch (action.type) {
    case "SET_NEW_USER":
      return { user: action.payload, isLoged: true };

    case "LOG_OUT_USER":
      return { user: null, isLoged: false };

    default:
      return state;
  }
};

export default user;
