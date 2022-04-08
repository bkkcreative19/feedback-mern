import { AddComment, CommentList } from "components";
import { Suggestion } from "components/SuggestionList/Suggestion";
import { useDispatch, useSelector } from "react-redux";
import { listFeedback } from "../../redux/actions/feedbackActions";
import { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import "./FeedbackDetails.scss";

export const FeedbackDetails = () => {
  const params = useParams();
  const history = useHistory();

  const dispatch = useDispatch();

  const feedbackDetails = useSelector((state) => state.feedback);

  const { loading: loadingFeedback, errorFeedback, feedback } = feedbackDetails;

  const commentList = useSelector((state) => state.commentList);

  const { loading: loadingComments, errorComments, comments } = commentList;

  useEffect(() => {
    dispatch(listFeedback(params.id));
  }, [params.id]);
  return (
    <div className="details">
      {feedback && (
        <>
          <div className="top">
            <div onClick={() => history.goBack()}>
              <i className="fas fa-chevron-left"></i> <span>Go Back</span>
            </div>
            <Link
              // onClick={() => setCurrentFeedback(feedback)}
              to={{
                pathname: `/edit-feedback/${feedback.title}`,
                state: feedback,
              }}
            >
              <button>Edit Feedback</button>
            </Link>
          </div>
          {feedback && <Suggestion feedback={feedback} />}
          {/* {comments && <CommentList comments={comments} />} */}
          <CommentList />
          <AddComment comments={comments} />
        </>
      )}
    </div>
  );
};
