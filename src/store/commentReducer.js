const commentReducer = (state = [], action) => {
  if (action.type === "SAVE_COMMENT") {
    return [...state, action.payload];
  }
  return state;
};

export default commentReducer;
