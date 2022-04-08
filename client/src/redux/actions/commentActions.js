import axios from "axios";

import {
  GET_COMMENTS_FAIL,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  ADD_COMMENT_FAIL,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
} from "../constants/commentConstants";

export const listComments = (feedbackId) => async (dispatch) => {
  try {
    dispatch({ type: GET_COMMENTS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:4000/api/comments/${feedbackId}`
    );

    dispatch({
      type: GET_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const addComment =
  (feedbackId, obj, options) => async (dispatch, getState) => {
    console.log(getState);
    try {
      dispatch({ type: ADD_COMMENT_REQUEST });

      const { data } = await axios.post(
        `http://localhost:4000/api/comments/${feedbackId}`,
        obj,
        options
      );
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: data,
      });
      window.location.reload();
    } catch (error) {
      dispatch({
        type: ADD_COMMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
