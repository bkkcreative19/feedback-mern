import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Select } from "components";

import Icon from "../../assets/starter-code/assets/shared/icon-new-feedback.svg";
import "./AddFeedback.scss";

import { categoryOptions } from "helpers";
import { Context } from "context/context";
import axios from "axios";

export const AddFeedback = () => {
  const { feedbacks, setFeedbacks } = useContext(Context);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [detail, setDetail] = useState("");
  const history = useHistory();

  const addFeedback = async () => {
    const feedback = {
      title,
      category,
      upvotes: 0,
      status: "suggestion",
      description: detail,
    };
    // console.log(feedback);
    const { data } = await axios.post(`/api/feedbacks`, feedback, {
      headers: {
        "x-auth-token": JSON.parse(localStorage.getItem("auth-token")),
      },
    });
    setTitle("");
    setCategory("");
    setDetail("");
    history.push("/");

    console.log(data);
  };

  return (
    <div className="add-feedback-container">
      <div className="go-back" onClick={() => history.goBack()}>
        <i className="fas fa-chevron-left"></i> <span>Go Back</span>
      </div>
      <div className="add-feedback">
        <h3>Create New Feedback</h3>
        <div className="title">
          <label htmlFor="">
            <p>Feedback Title</p>
            <p>Add a short, descriptive headline</p>
          </label>
          <input onChange={(e) => setTitle(e.target.value)} type="text" />
        </div>
        <div className="category">
          <label htmlFor="">
            <p>Category</p>
            <span>Choose a category for your feedback</span>
          </label>
          <Select setOption={setCategory} options={categoryOptions} />
        </div>
        <div className="detail">
          <label htmlFor="">
            <p>Feedback Detail</p>
            <span>
              Include any specific comments on what should be improved, added,
              etc.
            </span>
          </label>
          <input onChange={(e) => setDetail(e.target.value)} type="text" />
        </div>
        <div className="buttons">
          <button>Cancel</button>
          <button onClick={addFeedback}>Add Feedback</button>
        </div>
        <img src={Icon} alt="" className="icon" />
      </div>
    </div>
  );
};
