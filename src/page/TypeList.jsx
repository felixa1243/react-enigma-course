import {Routes} from "../constant/index.js";

const TypeList = ({onNavigate}) => {
    return (
        <div>
            <h3>Course Type Page</h3>
            <p>Params : params</p>
            <button
                onClick={() => onNavigate(Routes.ADD_COURSE)}>Go to add course
            </button>
            <button
                onClick={() => onNavigate(Routes.ADD_TYPE)}
            >Go to add type
            </button>
            <button
                onClick={() => onNavigate(Routes.COURSE_LIST)}
            >Go to course list
            </button>
        </div>
    )
}
export default TypeList