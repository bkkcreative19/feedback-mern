import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./AddComment.scss";

export const AddComment = ({ comments, setComments }) => {
  const params = useParams();
  const [comment, setComment] = useState("");
  let [allowedAmountChars, setAllowedAmountChars] = useState(250);

  const addComment = async () => {
    const obj = {
      content: comment,
    };

    const options = {
      headers: {
        "x-auth-token": JSON.parse(localStorage.getItem("auth-token")),
      },
    };
    const { data } = await axios.post(
      `http://localhost:4000/api/comments/${params.id}`,
      obj,
      options
    );
    console.log(comments);
    setComments([...comments, data]);
    console.log(comments);
    setComment("");
  };

  return (
    <div className="add-comment">
      <h4>Add Comment</h4>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
        type="text"
        placeholder="Type your comment here"
      />
      <div className="bottom">
        <p>{allowedAmountChars} Characters left</p>
        <button onClick={addComment}>Post Comment</button>
      </div>
    </div>
  );
};
