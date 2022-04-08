import { PostReply } from "components";
import React, { useState } from "react";
import "./Reply.scss";

export const Reply = ({ reply }) => {
  return (
    <div className="reply">
      <div className="comment">
        <div className="head">
          <img src={reply.user.pic} alt="user" />
          <div className="user">
            <h3>{reply.user.name}</h3>
            <p>@{reply.user.username}</p>
          </div>
        </div>
        <p className="content">{reply.content}</p>
      </div>
    </div>
  );
};
