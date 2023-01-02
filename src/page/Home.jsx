import Navbar from "../components/Navbar.jsx";
import {Navigate} from "react-router-dom";
import {ROUTES} from "../constant/index.js";

const Home = ({onClick, isLoggedIn}) => {
    if (isLoggedIn) {
        return <Navigate to={ROUTES.COURSE_LIST}/>
    }
    return (
        <>
            <h3>Dashboard</h3>
            <button onClick={() => onClick()}>Login</button>
        </>
    )
}
export default Home