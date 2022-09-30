import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { MoralisProvider } from "react-moralis";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  // =======================================================================
  // Initialising Moralis via a wrapper component in order to get the IPFS functionality
  // =======================================================================
  <MoralisProvider
    appId="hXs2TkCwD3BJqpYdyQYTiihH9Fp9K1V0yGnnQWZL"
    serverUrl="https://z7qvpwiiu8vi.usemoralis.com:2053/server"
  >
    <App />
  </MoralisProvider>,
  document.getElementById("root")
);
