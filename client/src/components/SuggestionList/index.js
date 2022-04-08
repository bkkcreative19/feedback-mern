import React from "react";
import "./SuggestionsList.scss";
import icon from "../../assets/starter-code/assets/suggestions/icon-suggestions.svg";

import { Link } from "react-router-dom";

import { Suggestion } from "./Suggestion";
import { SortBy } from "components";

export const SuggestionList = ({ feedbacks }) => {
  return (
    <div className="suggestion-list-container">
      <div className="top-bar">
        <img className="icon" src={icon} alt="" />
        <h4 className="total-suggestions">{feedbacks.length} Suggestions</h4>
        <SortBy />
        <Link to="/add-feedback">
          <button>+ Add Feedback</button>
        </Link>
      </div>
      <div className="suggestion-list">
        {feedbacks.map((feedback) => {
          return (
            <Link
              key={feedback.feedback_id}
              to={`/details/${feedback.feedback_id}`}
            >
              <Suggestion feedback={feedback} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
