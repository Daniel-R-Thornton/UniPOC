import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import "./index.css";
import "@aws-amplify/ui-react/styles.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <React.StrictMode>
    <App />
    <App />
  </React.StrictMode>
);
