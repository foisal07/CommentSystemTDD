import React, { useState } from "react";

export default function CommentBox() {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();

    // Dispatch action to add comment in redux store
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
