import { Navigate, useLocation } from "react-router-dom";
import Loding from "../components/utility/Loding";
import useAuth from "../components/Hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { authUser, authLoading } = useAuth();
  const location = useLocation();
  if (authLoading && !authUser) {
    return <Loding />;
  }
  if (authUser) {
    return children;
  } else {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
};

export default PrivateRoutes;
