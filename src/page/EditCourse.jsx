import {useLocation, useNavigate, useParams} from "react-router-dom";
import {ROUTES} from "../constant/index.js";

const EditCourse = ()=>{
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h3>Edit course</h3>
            <p>Params:{location?.state?.title}</p>
            <p>path variable: {params.id}</p>
            <button onClick={()=>navigate(ROUTES.COURSE_LIST,{
                state:{
                    title:`From edit course with id ${params.id}`
                }
            })}>Go to course List</button>
        </div>
    )
}
export default EditCourse