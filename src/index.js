import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.styles.css";
import App from "./App";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
