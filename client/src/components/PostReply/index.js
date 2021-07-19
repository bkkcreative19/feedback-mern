import axios from "axios";
import React, { useState } from "react";
import "./PostReply.scss";

export const PostReply = ({ commentId, replies, setReplies, setIsOpen }) => {
  const [reply, setReply] = useState("");

  const postReply = async () => {
    const obj = {
      content: reply,
    };

    const options = {
      headers: {
        "x-auth-token": JSON.parse(localStorage.getItem("auth-token")),
      },
    };
    const { data } = await axios.post(
      `http://localhost:4000/api/replies/${commentId}`,
      obj,
      options
    );

    setReplies([...replies, data]);
    setReply("");
    setIsOpen(false);
  };
  return (
    <div className="post-reply">
      <input onChange={(e) => setReply(e.target.value)} type="text" />
      <button onClick={postReply}>Post Reply</button>
    </div>
  );
};
