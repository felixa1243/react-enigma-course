import {Navigate, Outlet} from "react-router-dom";
import {ROUTES} from "../constant/Routes.js";
import Navbar from "./Navbar.jsx";

const ProtectedRoute = ({isLoggedIn, onClick}) => {
    if (!isLoggedIn) {
        return <Navigate to={ROUTES.HOME}/>
    }
    return (
        <div className={'flex flex-col w-full'}>
                <Navbar onClick={onClick}/>
            <hr/>
            <Outlet/>
        </div>
    )
}
export default ProtectedRoute