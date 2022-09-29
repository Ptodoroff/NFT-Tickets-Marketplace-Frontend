import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { MoralisProvider } from "react-moralis";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MoralisProvider
    appId="hXs2TkCwD3BJqpYdyQYTiihH9Fp9K1V0yGnnQWZL"
    serverUrl="https://z7qvpwiiu8vi.usemoralis.com:2053/server"
  >
    <App />
  </MoralisProvider>
);
