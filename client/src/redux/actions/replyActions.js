import axios from "axios";
import {
  REPLY_LIST_FAIL,
  REPLY_LIST_REQUEST,
  REPLY_LIST_SUCCESS,
} from "../constants/replyActions";

export const getReplies = (commentId) => async (dispatch) => {
  try {
    dispatch({ type: REPLY_LIST_REQUEST });

    const { data } = await axios.get(
      `http://localhost:4000/api/replies/${commentId}`
    );

    dispatch({
      type: REPLY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REPLY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
