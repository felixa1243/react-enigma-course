import {useState} from "react";
import {Routes} from "./constant/index.js";
import AddCourse from "./page/AddCourse.jsx";
import AddType from "./page/AddType.jsx";
import TypeList from "./page/TypeList.jsx";
import CourseList from "./page/CourseList.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
    const [nav, setNav] = useState(Routes.COURSE_LIST)
    let Component;
    switch (nav) {
        case Routes.ADD_COURSE:
            Component = AddCourse
            break;
        case Routes.ADD_TYPE:
            Component = AddType
            break;
        case Routes.TYPE_LIST:
            Component = TypeList
            break;
        case Routes.COURSE_LIST:
            Component = CourseList
            break;
        default:
            Component = CourseList
    }
    return (
        <div className="App">
            <Navbar onNavigate={setNav}/>
            <Component onNavigate={setNav}/>
        </div>
    )
}

export default App
