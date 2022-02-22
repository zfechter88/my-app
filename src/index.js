import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

const rootElement = document.getElementById("root");


function Testing() {
  return (
    <p>hold on this line testing.</p>
    )
}



ReactDOM.render(
  <StrictMode> 
  <p>Hello world.</p>,
  <Testing />,
  </StrictMode>,
  rootElement
);
