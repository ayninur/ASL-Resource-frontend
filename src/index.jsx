import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";


ReactDom.render(
  <Router>

    <App />

  </Router>,
  document.querySelector("#root")
);
