import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import routerConfig from "./router";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
console.log(rootElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>
);