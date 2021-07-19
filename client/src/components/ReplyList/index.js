import React, { useState } from "react";
import { Reply } from "./Reply";
import "./ReplyList.scss";

export const ReplyList = ({ replies }) => {
  const [stateReplies, setStateReplies] = useState(replies);
  return (
    <section className="reply-list">
      {replies.map((reply) => {
        return (
          <Reply
            setReplies={setStateReplies}
            replies={stateReplies}
            key={reply._id}
            reply={reply}
          />
        );
      })}
    </section>
  );
};
