import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  GET_COMMENTS_REQUEST,
  ADD_COMMENT_FAIL,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
} from "../constants/commentConstants";

export const getCommentsReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return { loading: true, comments: [] };
    case GET_COMMENTS_SUCCESS:
      return {
        loading: false,
        comments: action.payload,
      };
    case GET_COMMENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addCommentReducer = (state = { comment: {} }, action) => {
  switch (action.type) {
    case ADD_COMMENT_REQUEST:
      return { loading: true, comment: {} };
    case ADD_COMMENT_SUCCESS:
      return {
        loading: false,
        comment: action.payload,
      };
    case ADD_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
