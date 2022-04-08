import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/actions/commentActions";
import { useParams } from "react-router-dom";
import "./AddComment.scss";

export const AddComment = ({ comments, setComments }) => {
  const params = useParams();
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const obj = {
    content: text,
  };

  const { accessToken } = JSON.parse(localStorage.getItem("userInfo"));

  const options = {
    headers: {
      "x-auth-token": accessToken,
    },
  };
  const newComment = useSelector((state) => state.newComment);

  const { loading, error, comment } = newComment;

  return (
    <div className="add-comment">
      <h4>Add Comment</h4>
      <input
        maxLength="250"
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="Type your comment here"
      />
      <div className="bottom">
        <p>{250 - text.length} Characters left</p>
        <button onClick={() => dispatch(addComment(params.id, obj, options))}>
          Post Comment
        </button>
      </div>
    </div>
  );
};
