import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./pages/Main";
import { loadDataBase } from "./data/loadData";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    loadDataBase();
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </>
  );
}

export default App;
