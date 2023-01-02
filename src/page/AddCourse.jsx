import {Routes} from "../constant/index.js";

const AddCourse = ({onNavigate})=>{
    return (
        <div>
            <h3>Add course</h3>
            <p>Params :contoh params</p>
            <button onClick={()=>onNavigate(Routes.COURSE_LIST)}>Go to course list</button>
        </div>
    )
}
export default AddCourse