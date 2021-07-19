import React, { useContext, useState } from "react";
import "./SortBy.scss";
import { sortOptions } from "helpers";
import { Context } from "context/context";

export const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { sortFeedbacks, sortSelected, setSortSelected } = useContext(Context);
  const [selected, setSelected] = useState("most upvotes");

  return (
    <div className="sort-by">
      <p>
        Sort By:{" "}
        <span>
          {sortSelected}
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
                  // setSortSelected(e.target.innerText);
                  setIsOpen(false);
                  sortFeedbacks(e.target.innerText);
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
