import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

import App from "App.js";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode> 
  <p>Hello world.</p>,
  <App />,
  </StrictMode>,
  rootElement
);
