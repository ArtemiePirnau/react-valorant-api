import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import AppLevelProvider from "./context/AppLevelContext";
import "./index.scss";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <AppLevelProvider>
    <App />
  </AppLevelProvider>
);
