import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "components";
import { MyContext } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <MyContext>
      <Router>
        <App />
      </Router>
    </MyContext>
  </React.StrictMode>,
  document.getElementById("root")
);
