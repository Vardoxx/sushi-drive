import "../styles/App.scss";
import { createBrowserRouter } from "react-router-dom";
import { MyLayout as Layout } from "../components/layout/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <div>Home</div>, index: true }],
  },
]);
