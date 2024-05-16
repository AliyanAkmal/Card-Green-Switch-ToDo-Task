import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/ToDo/Todo";
import Main from "../pages/main";
import HomePage from "../pages/BuyCards";
import Layout from "../components/layout/layout";
import Card from "../pages/cardBuy";
import Accordian from "../pages/accordian";
import TabsCom from "../pages/tabs/Tabs";
import VisualCom from "../pages/visualComp/VisualCom";
import AlertsComp from "../pages/alert/Alerts";
import ProgressLine from "../pages/progressLine/Line";
import DrawerComp from "../pages/DrawerComp/DrawerComp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/list",
        element: <Todo />,
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
      {
        path: "/visual",
        element: <VisualCom />,
      },
      {
        path: "/alert",
        element: <AlertsComp />,
      },
      {
        path: "/line",
        element: <ProgressLine />,
      },
      {
        path: "/drawer",
        element: <DrawerComp />,
      },
    ],
  },

  {
    path: "*",
    element: <div>page not found</div>,
  },
]);
export default router;
