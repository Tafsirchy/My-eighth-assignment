import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        hydrateFallbackElement: <p>Loading...</p>,
        loader: () => fetch("./AppsData.json")
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
