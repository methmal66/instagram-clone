const init = "";

const userName = (state = init, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return action.payload;

    default:
      return state;
  }
};

export default userName;
