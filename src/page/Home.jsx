import {Navigate} from "react-router-dom";
import {ROUTES} from "../constant/Routes.js";
import Button from "../components/Button.jsx";

const Home = ({onClick, isLoggedIn}) => {
    if (isLoggedIn) {
        return <Navigate to={ROUTES.COURSE_LIST}/>
    }
    return (
        <div className={'flex w-full flex-col items-center'}>
            <h3>Dashboard</h3>
            <Button className={'px-4 py-2 '} onClick={() => onClick()}>Login</Button>
        </div>
    )
}
export default Home