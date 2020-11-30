export const setPassword = (password) => ({
  type: "SET_EMAIL",
  payload: password,
});

export const clearPassword = () => ({
  type: "CLEAR_PASSWORD",
});
