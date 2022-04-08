import React, { useEffect } from "react";
import { Comment } from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listComments } from "../../redux/actions/commentActions";
import "./CommentList.scss";

export const CommentList = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const commentList = useSelector((state) => state.commentList);

  const { loading: loadingComments, errorComments, comments } = commentList;

  useEffect(() => {
    dispatch(listComments(params.id));
  }, []);
  return (
    <div className="comments">
      <h2>
        {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
      </h2>
      {comments.map((comment) => {
        return <Comment key={comment.comment_id} comment={comment} />;
      })}
    </div>
  );
};
