import React, { useEffect } from "react";
import "./Suggestion.scss";

import upArrow from "../../../assets/starter-code/assets/shared/icon-arrow-up.svg";

export const Suggestion = ({ feedback }) => {
  useEffect(() => {}, []);
  return (
    <div className="suggestion">
      <div className="upvotes">
        <img src={upArrow} alt="upArrow" />
        <span>{feedback.upvotes}</span>
      </div>
      <div className="text">
        <h3>{feedback.title}</h3>
        <p>{feedback.description}</p>
        <p className="category">{feedback.category}</p>
      </div>
      <p className="comments">
        <i className="fas fa-comment"></i>
        <span>
          {feedback.comments?.length > 0 ? feedback.comments.length : 0}
        </span>
      </p>
    </div>
  );
};
