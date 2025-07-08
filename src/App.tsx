import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Language from "./components/Language";
import Word from "./components/Word";
import Translation from "./components/Translation";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Language />
        <div>---------------</div>
        <Word />
        <div>---------------</div>
        <Translation />
      </QueryClientProvider>
    </>
  );
}

export default App;
