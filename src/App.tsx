import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./pages/Main";
import { fetchDataExcel } from "./api";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const response = fetchDataExcel();
    console.log(response);
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
