import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../components/Hooks/useAuth";
import Loding from "../components/utility/Loding";

const PrivateRoutes = ({ children }) => {
  const { authUser, loding } = useAuth();
  const location = useLocation();
  if (loding) {
    return <Loding/>;
  }
  if (authUser) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
