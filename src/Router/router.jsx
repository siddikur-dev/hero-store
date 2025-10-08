import React from "react";
import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllApps from "../Components/Apps/AllApps";
import AppDetails from "../Pages/AppDetails";
import Installation from "../Pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <p>Loading...</p>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: AllApps,
      },
      {
        path: "/apps-details/:id",
        Component: AppDetails,
      },
      {
        path: "installation",
        Component: Installation,
      },
    ],
  },
]);
