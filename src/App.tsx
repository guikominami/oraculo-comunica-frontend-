import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import NavBar from "./components/UI/NavBar";
import Main from "./pages/Main";
import LoadData from "./pages/LoadData";
import About from "./pages/About";

const queryClient = new QueryClient();

function App() {
  const baseURL = import.meta.env.VITE_PROJECT_URL;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={baseURL + "/"} element={<Main />} />
            <Route path={baseURL + "/loadData"} element={<LoadData />} />
            <Route path={baseURL + "/about"} element={<About />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
