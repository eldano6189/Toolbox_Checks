import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import App from "./App";
import { ContextWrapper } from "./context/context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextWrapper>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ContextWrapper>
);
