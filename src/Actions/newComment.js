export const setNewComment = (comment) => ({
  type: "SET_NEW_COMMENT",
  payload: comment,
});

export const clearNewComment = () => ({
  type: "CLEAR_NEW_COMMENT",
});
