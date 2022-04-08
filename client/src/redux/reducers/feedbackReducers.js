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
  SORT_BY_MOST_UPVOTES,
  SORT_BY_LEAST_COMMENTS,
  SORT_BY_MOST_COMMENTS,
  SORT_BY_LEAST_UPVOTES,
} from "../constants/feedbackConstants";

const intialState = {
  feedbacks: [],
  feedback: {},
  filtered: [],
  selected: "all",
  test: [],
};

export const feedbackListReducer = (state = intialState, action) => {
  switch (action.type) {
    case FEEDBACK_LIST_REQUEST:
      return { ...state, feedbacks: [] };
    case FEEDBACK_LIST_SUCCESS:
      return { ...state, feedbacks: action.payload };
    case FEEDBACK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const feedbackDetailsReducer = (state = { feedback: {} }, action) => {
  switch (action.type) {
    case FEEDBACK_DETAILS_REQUEST:
      return { loading: true, feedback: {} };
    case FEEDBACK_DETAILS_SUCCESS:
      return {
        loading: false,
        feedback: action.payload,
      };
    case FEEDBACK_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateFeedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FEEDBACK_REQUEST:
      return { loading: true };
    case UPDATE_FEEDBACK_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case UPDATE_FEEDBACK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteFeedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FEEDBACK_REQUEST:
      return { loading: true };
    case DELETE_FEEDBACK_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case DELETE_FEEDBACK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const filterFeedbacksReducer = (state = intialState, action) => {
  switch (action.type) {
    case FILTER_FEEDBACKS:
      return { ...state, filtered: action.payload };
    default:
      return state;
  }
};

export const sortFeedbacksReducer = (state = intialState, action) => {
  switch (action.type) {
    case SORT_BY_LEAST_UPVOTES:
      return { ...state, filtered: action.payload };
    case SORT_BY_MOST_UPVOTES:
      return { ...state, filtered: action.payload };
    default:
      return state;
  }
};

export const setSelectedReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_SELECTED:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};
