import { useContext, useEffect, useState } from "react";
import { LeftRail, SuggestionList } from "components";

import "./Suggestions.scss";
import axios from "axios";
import { Context } from "context/context";

export const Suggestions = () => {
  const {
    setFeedbacks,
    feedbacks,
    fetchSuggestions,
    filteredFeedbacks,
    selected,
  } = useContext(Context);

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <div className="suggestion-page">
      <LeftRail setFeedbacks={setFeedbacks} feedbacks={feedbacks} />
      {/* <SuggestionList feedbacks={feedbacks} /> */}
      {selected === "all" ? (
        <SuggestionList feedbacks={feedbacks} />
      ) : (
        <SuggestionList feedbacks={filteredFeedbacks} />
      )}
    </div>
  );
};
