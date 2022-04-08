import { ReplyList } from "components";
import { PostReply } from "components";
import { useDispatch, useSelector } from "react-redux";
import { getReplies } from "../../../redux/actions/replyActions";
import React, { useEffect, useState } from "react";

import "./Comment.scss";

export const Comment = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const replyList = useSelector((state) => state.replyList);

  const { loading, error, replies } = replyList;

  return (
    <div className="comment">
      <div className="head">
        <img src={comment.user.pic} alt="user" />
        <div className="user">
          <h3>{comment.user.name}</h3>
          <p>@{comment.user.username}</p>
        </div>
        <span onClick={() => setIsOpen(!isOpen)}>Reply</span>
      </div>
      <p className="content">{comment.content}</p>
      {isOpen && (
        <PostReply
          // setReplies={setReplies}
          replies={replies}
          commentId={comment.comment_id}
          setIsOpen={setIsOpen}
        />
      )}

      <ReplyList commentId={comment.comment_id} />
    </div>
  );
};
