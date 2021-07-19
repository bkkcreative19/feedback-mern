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

export const App = () => {
  const history = useHistory();

  return (
    <>
      <Switch>
        <Route exact path="/">
          {localStorage.getItem("auth-token") ? (
            <Suggestions />
          ) : (
            history.push("/login")
          )}
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
          {localStorage.getItem("auth-token") ? <Redirect to="/" /> : <Login />}
        </Route>
      </Switch>
    </>
  );
};
