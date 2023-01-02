import {ROUTES} from "../constant/Routes.js";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

const CourseList = () => {
    const navigate = useNavigate()
    const [param, setParam] = useState(null)
    const [title] = useSearchParams()

    useEffect(() => {
        for (const entry of title.entries()) {
            const [key, value] = entry
            if (key === 'title') {
                setParam(value)
            }
        }
    }, [param])

    const params = {
        state: {
            title: 'from course list'
        }
    }
    return (
        <div>
            <h3>Course List Page</h3>
            <p>Params : {param}</p>
            <button
                onClick={() => navigate(ROUTES.ADD_COURSE, params)}>Go to add course
            </button>
            <button
                onClick={() => navigate(ROUTES.ADD_TYPE, params)}
            >Go to add type
            </button>
            <button
                onClick={() => navigate(ROUTES.TYPE_LIST, params)}
            >Go to type list
            </button>
        </div>
    )
}
export default CourseList