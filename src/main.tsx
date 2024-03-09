import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/app/app";
import "./index.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);
ReactDOM.createRoot(document.getElementById("root")!).render(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
