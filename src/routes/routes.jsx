import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/pages/Home/Home";
import LogIn from "../components/pages/Auth/LogIn";
import ErrorPage from "../components/Shared/ErrorPage";
import Register from "../components/pages/Auth/Register";
import ProfilePage from "../components/utility/ProfilePage";
import Dashboard from "../Layout/Dashboard";
import AHome from "../components/pages/Dashboard/Home";
import AddProduct from "../components/pages/Dashboard/AddProduct";
import PrivateRoutes from "./PrivateRoutes";

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
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <AHome />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
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
