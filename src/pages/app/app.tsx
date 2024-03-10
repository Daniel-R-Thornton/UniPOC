import AppRouter from "../appRouter/appRouter";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <>
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
