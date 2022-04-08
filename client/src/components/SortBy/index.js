import React, { useContext, useState } from "react";
import "./SortBy.scss";
import { sortOptions } from "helpers";
import { useDispatch, useSelector } from "react-redux";
import { sortFeedbacks } from "../../redux/actions/feedbackActions";

export const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("most upvotes");
  const filtered = useSelector((state) => state.filtered);

  const { filtered: filteredList } = filtered;
  const feedbackList = useSelector((state) => state.feedbackList);
  const { loading, error, feedbacks } = feedbackList;

  return (
    <div className="sort-by">
      <p>
        Sort By:{" "}
        <span>
          {selected}
          {isOpen ? (
            <i
              onClick={() => setIsOpen(!isOpen)}
              className="fas fa-chevron-up"
            ></i>
          ) : (
            <i
              onClick={() => setIsOpen(!isOpen)}
              className="fas fa-chevron-down"
            ></i>
          )}
        </span>
      </p>

      <div className="drop-down">
        {isOpen &&
          sortOptions.map((option, idx) => {
            return (
              <div
                onClick={(e) => {
                  setSelected(e.target.innerText);
                  setIsOpen(false);
                  dispatch(
                    sortFeedbacks(e.target.innerText, feedbacks, filteredList)
                  );
                }}
                key={idx}
              >
                <span>{option}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
