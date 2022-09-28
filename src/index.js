import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { MoralisProvider } from "react-moralis";

import "bootstrap/dist/css/bootstrap.min.css";

//Initialising a Moralis server to make use of their IPFS SDK
const { REACT_APP_MORALIS_SERVER_URL, REACT_APP_MORALIS_APP_ID } = process.env;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MoralisProvider
    appId="8IWTO6ftEQWZ4FLZyn2w5fufwZAj25k0fd0pOkao"
    serverUrl="https://ov0xykqfqt2t.usemoralis.com:2053/server"
  >
    <App />
  </MoralisProvider>
);

var input = document.querySelectorAll("input");
for (let i = 0; i < input.length; i++) {
  input[i].setAttribute("size", input[i].getAttribute("placeholder").length);
}
