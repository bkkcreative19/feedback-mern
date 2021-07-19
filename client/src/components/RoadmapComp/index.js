import React from "react";
import "./RoadmapComp.scss";
import { products } from "../../data";

export const RoadmapComp = ({ suggestion, color }) => {
  // console.log(suggestion);
  return (
    <div className="card" style={{ borderColor: color }}>
      {suggestion && (
        <>
          <div className="top">
            <div className="dot" style={{ background: color }}></div>
            <span className="status">{suggestion.status}</span>
          </div>

          <div className="info">
            <h3>{suggestion.title}</h3>
            <p>{suggestion.description}</p>
          </div>
          <span className="category">{suggestion.category}</span>
          <div className="bottom">
            <span className="upvotes">
              <i className="fas fa-chevron-up"></i>
              <span>{suggestion.upvotes}</span>
            </span>
            <div className="comment-num">
              <i className="fas fa-comment"></i>
              <p>{suggestion.comments ? suggestion.comments.length : 0}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
