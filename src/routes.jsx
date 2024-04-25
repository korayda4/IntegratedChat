import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts";
import Chat from "./Chat/chat/";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Chat />,
      }
    ],
  },
]);
