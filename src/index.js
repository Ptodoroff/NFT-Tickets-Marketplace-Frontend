import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);

var input = document.querySelectorAll("input");
for (let i = 0; i < input.length; i++) {
  input[i].setAttribute("size", input[i].getAttribute("placeholder").length);
}
