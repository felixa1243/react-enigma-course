import {ROUTES} from "../constant/Routes.js";
import {useLocation, useNavigate} from "react-router-dom";

const TypeList = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = {
        state:{
            title:'from type list'
        }
    }
    return (
        <div>
            <h3>Course Type Page</h3>
            <p>Params : {location?.state?.title}</p>
            <button
                onClick={() => navigate(ROUTES.ADD_COURSE,params)}>Go to add course
            </button>
            <button
                onClick={() => navigate(ROUTES.ADD_TYPE,params)}
            >Go to add type
            </button>
            <button
                onClick={() => navigate(ROUTES.COURSE_LIST,params)}
            >Go to course list
            </button>
        </div>
    )
}
export default TypeList