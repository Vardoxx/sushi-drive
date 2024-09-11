import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router/router.tsx";
import { RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import "./styles/App.scss";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
