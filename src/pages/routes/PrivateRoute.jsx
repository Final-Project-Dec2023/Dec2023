import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
 
const PrivateRoutes = () => {
    const {auth} = useAuth();

    return auth?.token ? <Outlet/> : <Navigate to = "/login"/>;
}

export default PrivateRoutes;