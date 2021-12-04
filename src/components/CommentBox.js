import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function CommentBox() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SAVE_COMMENT", payload: comment });
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
