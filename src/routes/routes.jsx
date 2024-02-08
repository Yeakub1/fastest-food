import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/pages/Home/Home";
import LogIn from "../components/pages/Auth/LogIn";
import ErrorPage from "../components/Shared/ErrorPage";
import Register from "../components/pages/Auth/Register";
import ProfilePage from "../components/utility/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user-profile",
        element: <ProfilePage/>,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
