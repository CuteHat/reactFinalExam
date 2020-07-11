import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthGuard from "./Contexts/auth";

ReactDOM.render(
  <AuthGuard>
    <App />
  </AuthGuard>,
  document.getElementById("app")
);
