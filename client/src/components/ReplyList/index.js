import React, { useState, useEffect } from "react";
import { Reply } from "./Reply";

import axios from "axios";

import "./ReplyList.scss";

export const ReplyList = ({ commentId }) => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getReplies = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/api/replies/${commentId}`
      );

      if (mounted) {
        setReplies(data);
      }
    };

    getReplies();

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <section className="reply-list">
      {replies &&
        replies.map((reply) => {
          return <Reply replies={replies} key={reply.reply_id} reply={reply} />;
        })}
    </section>
  );
};
