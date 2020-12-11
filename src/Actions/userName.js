export const setUserName = (name) => ({
  type: "SET_USER_NAME",
  payload: name,
});

export const clearUserName = () => {
  return { type: "CLEAR_USER_NAME" };
};
