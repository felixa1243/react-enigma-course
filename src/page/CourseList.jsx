import {Routes} from "../constant/index.js";

const CourseList = ({onNavigate})=>{
    return (
        <div>
            <h3>Course List Page</h3>
            <p>Params : params</p>
            <button
                onClick={()=>onNavigate(Routes.ADD_COURSE)}>Go to add course</button>
            <button
                onClick={()=>onNavigate(Routes.ADD_TYPE)}
            >Go to add type</button>
            <button
                onClick={()=>onNavigate(Routes.TYPE_LIST)}
            >Go to type list</button>
        </div>
    )
}
export default CourseList