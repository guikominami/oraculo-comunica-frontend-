import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./pages/Main";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </>
  );
}

export default App;
