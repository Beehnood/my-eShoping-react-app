
import { useLoginContext } from "../../context/LoginContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { isLogin } = useLoginContext();

  return <>{ isLogin ? <Outlet/> : <Navigate to="/" />};</> 
}
