import axios from "axios";

import {
  FEEDBACK_LIST_FAIL,
  FEEDBACK_LIST_SUCCESS,
  FEEDBACK_LIST_REQUEST,
  FEEDBACK_DETAILS_FAIL,
  FEEDBACK_DETAILS_SUCCESS,
  FEEDBACK_DETAILS_REQUEST,
  UPDATE_FEEDBACK_FAIL,
  UPDATE_FEEDBACK_REQUEST,
  UPDATE_FEEDBACK_SUCCESS,
  DELETE_FEEDBACK_FAIL,
  DELETE_FEEDBACK_REQUEST,
  DELETE_FEEDBACK_SUCCESS,
  FILTER_FEEDBACKS,
  SET_SELECTED,
  SORT_BY_LEAST_COMMENTS,
  SORT_BY_LEAST_UPVOTES,
  SORT_BY_MOST_COMMENTS,
  SORT_BY_MOST_UPVOTES,
} from "../constants/feedbackConstants";

export const listFeedbacks = () => async (dispatch) => {
  try {
    dispatch({ type: FEEDBACK_LIST_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/api/feedbacks`);

    dispatch({
      type: FEEDBACK_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FEEDBACK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listFeedback = (feedbackId) => async (dispatch) => {
  try {
    dispatch({ type: FEEDBACK_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:4000/api/feedbacks/${feedbackId}`
    );

    dispatch({
      type: FEEDBACK_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FEEDBACK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateFeedback = (feedbackId, obj) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_FEEDBACK_REQUEST });

    await axios.put(`/api/feedbacks/${feedbackId}`, obj);

    dispatch({
      type: UPDATE_FEEDBACK_SUCCESS,
    });
    window.history.back();
  } catch (error) {
    dispatch({
      type: UPDATE_FEEDBACK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteFeedback = (feedbackId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_FEEDBACK_REQUEST });

    await axios.delete(`/api/feedbacks/${feedbackId}`);

    dispatch({
      type: DELETE_FEEDBACK_SUCCESS,
    });
    document.location.href = "/";
  } catch (error) {
    dispatch({
      type: DELETE_FEEDBACK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const filterFeedbacks = (feedbacks, selected) => (dispatch) => {
  if (selected === "all") {
    dispatch({
      type: FILTER_FEEDBACKS,
      payload: feedbacks,
    });
  } else {
    const filtered = feedbacks.filter((item) => item.category === selected);
    dispatch({
      type: FILTER_FEEDBACKS,
      payload: filtered,
    });
  }
};

export const setSelected = (selected) => (dispatch) => {
  dispatch({
    type: SET_SELECTED,
    payload: selected,
  });
};

export const sortFeedbacks = (sortBy, feedbacks, filtered) => (dispatch) => {
  // console.log(sortBy);
  // console.log(feedbacks);
  let testArr;

  if (filtered.length === 0) {
    testArr = feedbacks;
  } else {
    testArr = filtered;
  }

  // console.log("hi", testArr);

  if (sortBy === "least comments") {
    dispatch({
      type: SORT_BY_LEAST_COMMENTS,
      payload: feedbacks,
    });
  } else if (sortBy === "most comments") {
    dispatch({
      type: SORT_BY_MOST_COMMENTS,
      payload: feedbacks,
    });
  } else if (sortBy === "most upvotes") {
    let yay = testArr.sort((a, b) => b.upvotes - a.upvotes);
    dispatch({
      type: SORT_BY_MOST_UPVOTES,
      payload: yay,
    });
  } else {
    let yay = testArr.sort((a, b) => a.upvotes - b.upvotes);
    dispatch({
      type: SORT_BY_LEAST_UPVOTES,
      payload: yay,
    });
  }
};
