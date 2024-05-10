import { Link, createBrowserRouter } from "react-router-dom";
import Todo from "../pages/ToDo/Todo";
import Main from "../pages/main";
import HomePage from "../pages/BuyCards";
import Layout from "../components/layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/list",
        element: <Todo />,
      },
      {
        path: "/buy",
        element: <HomePage />,
      },
    ],
  },

  {
    path: "*",
    element: <div>page not found</div>,
  },
]);
export default router;