import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Outlet } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./layouts/Header";
import Router from "./routes/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Outlet />
          <Router />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
