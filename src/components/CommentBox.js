import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function CommentBox() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to add comment in redux store
    dispatch({ type: "SAVE_COMMENT", comment: comment });
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave A Comment</h2>
      <textarea onChange={(e) => setComment(e.target.value)} value={comment} />
      <button>Add Comment</button>
    </form>
  );
}
