import { useRoutes } from "react-router-dom";

import CountryDetail from "../pages/CountryDetail";
import Home from "../pages/Home";

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
