import "./App.scss";

import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import {
  AddFeedback,
  EditFeedback,
  FeedbackDetails,
  Login,
  Roadmap,
  Suggestions,
} from "pages";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  return (
    <>
      <Switch>
        <Route exact path="/">
          {!userInfo ? <Redirect to="/login" /> : <Suggestions />}
        </Route>
        <Route exact path="/details/:id">
          <FeedbackDetails />
        </Route>
        <Route path="/add-feedback">
          <AddFeedback />
        </Route>
        <Route path="/edit-feedback/:title">
          <EditFeedback />
        </Route>
        <Route path="/roadmap">
          <Roadmap />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
};
