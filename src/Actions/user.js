export const setNewUser = (user) => {
  return {
    type: "SET_NEW_USER",
    payload: user,
  };
};

export const logOutUser = () => {
  return {
    type: "LOG_OUT_USER",
  };
};
