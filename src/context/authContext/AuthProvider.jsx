import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer, initialState } from '../../reducers/authReducer';



export const AuthProvider = ({children}) => {

   const [authState, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{
            authState,
            dispatch
        }}>
           {children} 
        </AuthContext.Provider>
    )
}
