import { Outlet,Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

const PrivateRoute = () => {
    const {auth}=useAuth();


  return auth?.token?<outlet/>:<Navigate to="login"/>
}

export default PrivateRoute