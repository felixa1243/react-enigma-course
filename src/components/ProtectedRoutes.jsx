import {Navigate, Outlet} from "react-router-dom";
import {ROUTES} from "../constant/index.js";
import Navbar from "./Navbar.jsx";

const ProtectedRoute = ({isLoggedIn, onClick}) => {
    if (!isLoggedIn) {
        return <Navigate to={ROUTES.HOME}/>
    }
    return (
        <div>
            <div style={{
                display: 'flex',
                gap: '10px'
            }}>
                <Navbar/>
                <button onClick={onClick}>Logout</button>
            </div>
            <hr/>
            <Outlet/>
        </div>
    )
}
export default ProtectedRoute