import React from "react";
import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Navbar/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Navbar,
  },
]);
