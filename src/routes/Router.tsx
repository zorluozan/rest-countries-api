import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import CountryDetail from "../pages/CountryDetail";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/country/:name",
      element: <CountryDetail />,
    },
  ]);
  return element;
}
