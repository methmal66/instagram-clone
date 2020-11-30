export const setProgress = (progress) => ({
  type: "SET_PROGRESS",
  payload: progress,
});

export const clearProgress = () => ({
  type: "CLEAR_PROGRESS",
});
