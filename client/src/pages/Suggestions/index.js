import { useEffect } from "react";
import { LeftRail, SuggestionList } from "components";
import { useDispatch, useSelector } from "react-redux";
import { listFeedbacks } from "../../redux/actions/feedbackActions";

import "./Suggestions.scss";

export const Suggestions = () => {
  const dispatch = useDispatch();

  const feedbackList = useSelector((state) => state.feedbackList);

  const { feedbacks } = feedbackList;

  const filtered = useSelector((state) => state.filtered);
  const selectedInput = useSelector((state) => state.selectedInput);
  const { selected } = selectedInput;

  const { filtered: filteredList } = filtered;

  useEffect(() => {
    dispatch(listFeedbacks());
  }, [dispatch]);

  return (
    <div className="suggestion-page">
      <LeftRail feedbacks={feedbacks} />
      {selected !== "all" ? (
        <SuggestionList feedbacks={filteredList} />
      ) : (
        <SuggestionList feedbacks={feedbacks} />
      )}
    </div>
  );
};
