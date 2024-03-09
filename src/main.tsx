import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/app/app";
import "./index.css";
// import the aws ui css

import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // set stale time to 1 min (i know its just clearer to read this way dont @ me for this )
      staleTime: 1000 * 60 * 1,
    },
  },
});

Amplify.configure(awsExports);
ReactDOM.createRoot(document.getElementById("root")!).render(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
