import {
  REPLY_LIST_FAIL,
  REPLY_LIST_REQUEST,
  REPLY_LIST_SUCCESS,
} from "../constants/replyActions";

export const replyListReducer = (state = { replies: [] }, action) => {
  switch (action.type) {
    case REPLY_LIST_REQUEST:
      return { loading: true, replies: [] };
    case REPLY_LIST_SUCCESS:
      return {
        loading: false,
        replies: action.payload,
      };
    case REPLY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
