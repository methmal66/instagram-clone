export const setNewUser = (user) => ({
  type: "SET_NEW_USER",
  payload: user,
});

export const logOutUser = () => ({
  type: "LOG_OUT_USER",
});
