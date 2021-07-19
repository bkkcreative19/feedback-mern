import React from "react";
import { Heading } from "./Heading";
import { Filter } from "./Filter";
import { ViewRoadmap } from "./ViewRoadmap";
import "./LeftRail.scss";

export const LeftRail = ({ setFeedbacks, feedbacks }) => {
  return (
    <div className="left-rail">
      <Heading />
      <Filter setFeedbacks={setFeedbacks} feedbacks={feedbacks} />
      <ViewRoadmap />
    </div>
  );
};
