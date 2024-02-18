import { BrowserRouter, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./routes/Router";
import Header from "./layouts/Header";
import { ThemeProvider } from "./contexts/ThemeContext";

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
