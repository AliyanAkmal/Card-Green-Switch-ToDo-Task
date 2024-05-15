import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/ToDo/Todo";
import Main from "../pages/main";
import HomePage from "../pages/BuyCards";
import Layout from "../components/layout/layout";
import Card from "../components/cardBuy";
import Accordian from "../components/accordian";
import TabsCom from "../components/tabs/Tabs";
import VisualCom from "../components/visualComp/VisualCom";
import AlertsComp from "../components/alert/Alerts";
import ProgressLine from "../components/progressLine/Line";
import Toast from "../components/toast/Toast";
import ToastComp from "../components/toast/Toast";
import DialogComp from "../components/alertDialog";

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
        path: "/toast",
        element: <ToastComp />,
      },
      {
        path: "/dialog",
        element: <DialogComp />,
      },
    ],
  },

  {
    path: "*",
    element: <div>page not found</div>,
  },
]);
export default router;
