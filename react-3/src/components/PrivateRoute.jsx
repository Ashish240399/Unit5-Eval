import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/UserStContext"

export const ProtectedRoute=({children})=>{
    const {login}=useContext(AuthContext);
    if(login){
return children
    }
    return <Navigate  to="/login" />
}