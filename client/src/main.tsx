import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router/router.tsx";
import { RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import "./styles/App.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
