import { Context } from "context/context";
import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterFeedbacks,
  setSelected,
} from "../../../redux/actions/feedbackActions";
import "./Filter.scss";

export const Filter = () => {
  // const [selected, setSelected] = useState("all");
  const dispatch = useDispatch();
  const classname = () => {
    return "s";
  };

  // console.log(selected);
  const feedbackList = useSelector((state) => state.feedbackList);

  const selectedInput = useSelector((state) => state.selectedInput);

  // console.log(feedbackList);

  const options = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const { loading, error, feedbacks } = feedbackList;
  const { selected } = selectedInput;

  useEffect(() => {
    dispatch(filterFeedbacks(feedbacks, selected));
  }, [selected]);

  return (
    <div className="filter">
      <div className="row">
        {options.splice(0, 3).map((opt, idx) => {
          return (
            <p
              key={idx}
              className={opt.toLowerCase() === selected ? "selected" : ""}
              onClick={(e) =>
                dispatch(setSelected(e.target.innerText.toLowerCase()))
              }
            >
              {opt}
            </p>
          );
        })}
      </div>
      <div className="row">
        {options.splice(0, 2).map((opt, idx) => {
          return (
            <p
              key={idx}
              className={opt.toLowerCase() === selected ? "selected" : ""}
              onClick={(e) =>
                dispatch(setSelected(e.target.innerText.toLowerCase()))
              }
            >
              {opt}
            </p>
          );
        })}
      </div>
      <div className="row">
        {options.splice(0, 3).map((opt, idx) => {
          return (
            <p
              key={idx}
              className={opt.toLowerCase() === selected ? "selected" : ""}
              onClick={(e) =>
                dispatch(setSelected(e.target.innerText.toLowerCase()))
              }
            >
              {opt}
            </p>
          );
        })}
      </div>
    </div>
  );
};
