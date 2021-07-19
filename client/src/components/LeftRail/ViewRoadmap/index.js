import { Context } from "context/context";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ViewRoadmap.scss";

export const ViewRoadmap = () => {
  const { feedbacks } = useContext(Context);
  return (
    <div className="view-roadmap">
      <div className="head">
        <h2>Roadmap</h2>
        <Link to="/roadmap">View</Link>
      </div>
      <div className="list">
        <div className="list__item">
          <div className="dot orange"></div>
          <p>Planned</p>
          <span>
            {
              feedbacks.filter((feedback) => feedback.status === "planned")
                .length
            }
          </span>
        </div>
        <div className="list__item">
          <div className="dot purple"></div>
          <p>In-Progress</p>
          <span>
            {
              feedbacks.filter((feedback) => feedback.status === "in-progress")
                .length
            }
          </span>
        </div>
        <div className="list__item">
          <div className="dot blue"></div>
          <p>Live</p>
          <span>
            {" "}
            {feedbacks.filter((feedback) => feedback.status === "live").length}
          </span>
        </div>
      </div>
    </div>
  );
};
