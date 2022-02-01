import { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {

  const { authState } = useContext(AuthContext);

  return authState.token ? <Outlet /> : <Navigate to="/login" />;
};
