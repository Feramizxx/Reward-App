import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { customerTransactionsApi } from "./store/CustomerApi";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiProvider api={customerTransactionsApi}>
    <App />
  </ApiProvider>
);





