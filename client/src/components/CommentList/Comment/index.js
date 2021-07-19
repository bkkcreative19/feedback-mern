import axios from "axios";
import { ReplyList } from "components";
import { PostReply } from "components";

import React, { useEffect, useState } from "react";

import "./Comment.scss";

export const Comment = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [replies, setReplies] = useState(null);

  useEffect(() => {
    const options = {
      headers: {
        "x-auth-token": JSON.parse(localStorage.getItem("auth-token")),
      },
    };
    const fetchReplies = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/api/replies/${comment._id}`,
        options
      );
      setReplies(data);
    };

    fetchReplies();
  }, []);

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
          setReplies={setReplies}
          replies={replies}
          commentId={comment._id}
          setIsOpen={setIsOpen}
        />
      )}
      {replies && <ReplyList replies={replies} />}
    </div>
  );
};
