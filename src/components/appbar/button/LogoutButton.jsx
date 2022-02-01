import { useContext } from "react"
import { AuthContext } from "../../../context/authContext/AuthContext"
import { MenuContext } from "../../../context/menuContext/MenuContext";



export const LogoutButton = () => {

    const { dispatch } = useContext(AuthContext);
    const { setMenu } = useContext(MenuContext);

    const handleLogout = () => {

      localStorage.removeItem('user');
      
        dispatch({
            type: 'setToken',
            payload: ''
        })

        setMenu([]);
    }

    return (
      <button
        onClick={handleLogout}
        className="btn btn-secondary"
        style={{borderRadius: '25px'}}
      >
        Logout
      </button>
    );
}