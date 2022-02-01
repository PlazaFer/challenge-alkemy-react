import { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const { authState } = useContext(AuthContext);

  return authState.token ? <Navigate to="/" /> : <Outlet />;
};
