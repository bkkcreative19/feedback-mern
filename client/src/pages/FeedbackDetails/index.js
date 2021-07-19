import axios from "axios";
import { AddComment, CommentList } from "components";
import { Suggestion } from "components/SuggestionList/Suggestion";
import { Context } from "context/context";
import { useContext, useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import "./FeedbackDetails.scss";

export const FeedbackDetails = () => {
  const [feedback, setFeedback] = useState({});
  const [comments, setComments] = useState(null);
  const { setCurrentFeedback } = useContext(Context);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    let mounted = true;
    const fetchFeedback = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/api/feedbacks/${params.id}`
      );

      const comments = await axios.get(
        `http://localhost:4000/api/comments/${params.id}`
      );

      setComments(comments.data);
      if (mounted) setFeedback(data);
    };

    fetchFeedback();

    return () => (mounted = false);
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
              onClick={() => setCurrentFeedback(feedback)}
              to={`/edit-feedback/${feedback.title}`}
            >
              <button>Edit Feedback</button>
            </Link>
          </div>
          {feedback && <Suggestion feedback={feedback} />}

          {comments && <CommentList comments={comments} />}
          <AddComment comments={comments} setComments={setComments} />
        </>
      )}
    </div>
  );
};
