import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Translations from "./pages/Translations";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Translations />
      </QueryClientProvider>
    </>
  );
}

export default App;
