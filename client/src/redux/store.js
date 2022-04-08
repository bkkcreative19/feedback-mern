import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  feedbackListReducer,
  feedbackDetailsReducer,
  updateFeedbackReducer,
  deleteFeedbackReducer,
  filterFeedbacksReducer,
  setSelectedReducer,
  sortFeedbacksReducer,
} from "../redux/reducers/feedbackReducers";

import {
  getCommentsReducer,
  addCommentReducer,
} from "../redux/reducers/commentReducers";

import { replyListReducer } from "../redux/reducers/replyReducers";

import { userLoginReducer } from "../redux/reducers/userReducers";

const reducer = combineReducers({
  feedbackList: feedbackListReducer,
  feedback: feedbackDetailsReducer,
  feedbackUpdate: updateFeedbackReducer,
  feedbackDelete: deleteFeedbackReducer,
  filtered: filterFeedbacksReducer,
  test: sortFeedbacksReducer,
  selectedInput: setSelectedReducer,
  commentList: getCommentsReducer,
  replyList: replyListReducer,
  newComment: addCommentReducer,
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  // currentFeedback: {},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
