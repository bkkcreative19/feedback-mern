import { PostReply } from "components";
import React, { useState } from "react";
import "./Reply.scss";

export const Reply = ({ reply, replies, setReplies }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="reply">
      <div className="comment">
        <div className="head">
          <img src={reply.user.pic} alt="user" />
          <div className="user">
            <h3>{reply.user.name}</h3>
            <p>@{reply.user.username}</p>
          </div>
          <span onClick={() => setIsOpen(!isOpen)}>Reply</span>
        </div>
        <p className="content">{reply.content}</p>
        {isOpen && (
          <PostReply
            setIsOpen={setIsOpen}
            replies={replies}
            setReplies={setReplies}
          />
        )}
        {/* <ReplyList replies={reply.replies} /> */}
      </div>
    </div>
  );
};
