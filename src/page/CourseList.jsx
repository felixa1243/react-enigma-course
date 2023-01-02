import {ROUTES} from "../constant/index.js";
import {useLocation, useNavigate} from "react-router-dom";

const CourseList = ()=>{
    const navigate = useNavigate()
    const location = useLocation()
    const params = {
        state:{
            title:'from course list'
        }
    }
    return (
        <div>
            <h3>Course List Page</h3>
            <p>Params : {location?.state?.title}</p>
            <button
                onClick={()=>navigate(ROUTES.ADD_COURSE,params)}>Go to add course</button>
            <button
                onClick={()=>navigate(ROUTES.ADD_TYPE,params)}
            >Go to add type</button>
            <button
                onClick={()=>navigate(ROUTES.TYPE_LIST,params)}
            >Go to type list</button>
        </div>
    )
}
export default CourseList