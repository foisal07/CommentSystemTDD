import React from "react";
import { useSelector } from "react-redux";

export default function CommentList() {
  const comments = useSelector((state) => state);
  return (
    <div>
      {comments.length > 0 &&
        comments.map((comment) => <li key={Math.random()}>{comment}</li>)}
    </div>
  );
}
