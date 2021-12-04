import commentReducer from "../commentReducer";

describe("reducers", () => {

  it("handles actions with type SAVE_COMMENT", () => {
    const newState = commentReducer([], {
      type: "SAVE_COMMENT",
      payload: "New Comment",
    });

    expect(newState).toEqual(["New Comment"]);
  });
  
});
