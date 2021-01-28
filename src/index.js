import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

window.React = React;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
