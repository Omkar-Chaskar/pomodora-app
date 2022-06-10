import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CombinedProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <CombinedProvider>
      <App />
    </CombinedProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
