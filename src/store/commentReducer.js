const commentReducer = (state = [], action) => {
  if (action.type === "SAVE_COMMENT") {
    return [...state, action.comment];
  }
  return state;
};

export default commentReducer;
