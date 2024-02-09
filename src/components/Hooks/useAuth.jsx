import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
  const { authUser, authLoading, setAuthUser, logout, loding } =
    useContext(AuthContext);
  return { authUser, authLoading, setAuthUser, logout, loding };
};

export default useAuth;
