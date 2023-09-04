import { BrowserRouter, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./routes/Router";
import Header from "./layouts/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Outlet />
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
