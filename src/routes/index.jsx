import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/ToDo/Todo";
import Main from "../pages/main";
import HomePage from "../pages/BuyCards";
import Layout from "../components/layout/layout";
import Card from "../components/cardBuy";
import Accordian from "../components/accordian";
import TabsCom from "../components/tabs/Tabs";

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
      {
        path: "/ui",
        element: <Card />,
      },
      {
        path: "/accordian",
        element: <Accordian />,
      },
      {
        path: "/tabs",
        element: <TabsCom />,
      },
    ],
  },

  {
    path: "*",
    element: <div>page not found</div>,
  },
]);
export default router;
