import {ROUTES} from "../constant/index.js";
import {useLocation, useNavigate} from 'react-router-dom'

const AddCourse = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div>
            <h3>Add course</h3>
            <p>Params :{location?.state?.title}</p>
            <button onClick={() => navigate(ROUTES.COURSE_LIST+'?title=from add course')}>Go to course list</button>
        </div>
    )
}
export default AddCourse