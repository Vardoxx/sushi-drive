import { createBrowserRouter } from "react-router-dom";
import { MyLayout as Layout } from "../components/layout/Layout";
import SeasonPage from "../pages/Season-page/SeasonPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <SeasonPage />, index: true },
      { path: "/combo", element: <div>комбо</div> },
      { path: "/sushi", element: <div>суши</div> },
      { path: "/pizza", element: <div>пиццы</div> },
      { path: "/appetizers", element: <div>закуски</div> },
      { path: "/woks", element: <div>воки</div> },
      { path: "/additional", element: <div>дополнительно</div> },
    ],
  },
]);
