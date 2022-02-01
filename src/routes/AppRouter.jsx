import { useContext, useEffect } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { MenuItemDetails } from "../components/menu/MenuItemDetails";
import { AuthContext } from "../context/authContext/AuthContext";
import { HomePage } from "../pages/home/HomePage";
import { LoginPage } from "../pages/login/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

    const { authState } = useContext(AuthContext);

     useEffect(() => {

       authState.token &&
         localStorage.setItem("user", JSON.stringify(authState.token));

     }, [authState.token]);

  
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path='/dish/:id' element={<MenuItemDetails />}/>
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to='/login' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}