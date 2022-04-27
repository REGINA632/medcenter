import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HunelProvider, HunelCreditCard } from "reactjs-credit-card";

const hunel = new HunelCreditCard();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HunelProvider config={hunel}>
        <App />
      </HunelProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
