import { Select } from "components";
import { categoryOptions, updateOptions } from "helpers";
import { useState } from "react";
import {
  deleteFeedback,
  updateFeedback,
} from "../../redux/actions/feedbackActions";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import Icon from "../../assets/starter-code/assets/shared/icon-edit-feedback.svg";
import "./EditFeedback.scss";

export const EditFeedback = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { state: currentFeedback } = location;

  const [title, setTitle] = useState(currentFeedback.title);
  const [category, setCategory] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  const [detail, setDetail] = useState(currentFeedback.description);

  const obj = {
    title,
    category,
    status: updateStatus,
    description: detail,
    upvotes: currentFeedback.upvotes,
  };

  return (
    <div className="edit-feedback-container">
      <div className="go-back" onClick={() => history.goBack()}>
        <i className="fas fa-chevron-left"></i> <span>Go Back</span>
      </div>
      <div className="edit-feedback">
        <h3>Editing `{currentFeedback.title}`</h3>
        <div className="title">
          <label htmlFor="">
            <p>Feedback Title</p>
            <p>Add a short, descriptive headline</p>
          </label>
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="category">
          <label htmlFor="">
            <p>Category</p>
            <span>Choose a category for your feedback</span>
          </label>
          <Select setOption={setCategory} options={categoryOptions} />
        </div>
        <div className="update-status">
          <label htmlFor="">
            <p>Update Status</p>
            <span>Change Feature State</span>
          </label>
          <Select setOption={setUpdateStatus} options={updateOptions} />
        </div>
        <div className="detail">
          <label htmlFor="">
            <p>Feedback Detail</p>
            <span>
              Include any specific comments on what should be improved, added,
              etc.
            </span>
          </label>
          <input
            value={detail}
            type="text"
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button
            onClick={() =>
              dispatch(deleteFeedback(currentFeedback.feedback_id))
            }
          >
            Delete
          </button>
          <button>Cancel</button>
          <button
            onClick={() =>
              dispatch(updateFeedback(currentFeedback.feedback_id, obj))
            }
          >
            Edit Feedback
          </button>
        </div>
        <img src={Icon} alt="" className="icon" />
      </div>
    </div>
  );
};
