import React from "react";
import { Comment } from "./Comment";
import "./CommentList.scss";

export const CommentList = ({ comments }) => {
 
  return (
    <div className="comments">
      <h2>
        {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
      </h2>
      {comments.map((comment) => {
        return <Comment key={comment._id} comment={comment} />;
      })}
    </div>
  );
};
