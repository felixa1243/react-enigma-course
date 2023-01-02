import Navbar from "./components/Navbar.jsx";
import {Routes, Route} from 'react-router-dom';
import {ROUTES} from "./constant/index.js";
import CourseList from "./page/CourseList.jsx";
import TypeList from "./page/TypeList.jsx";
import AddCourse from "./page/AddCourse.jsx";
import AddType from "./page/AddType.jsx";
import EditCourse from "./page/EditCourse.jsx";

function App() {
    const menu = [
        {path: "/",index:true, element: <h1>Dashboard Page</h1>},
        {path: ROUTES.COURSE_LIST, element: <CourseList/>},
        {path: ROUTES.TYPE_LIST, element: <TypeList/>},
        {path: ROUTES.ADD_COURSE, element: <AddCourse/>},
        {path: ROUTES.ADD_TYPE, element: <AddType/>},
        {path:`${ROUTES.EDIT_COURSE}/:id`, element: <EditCourse/>},
        {path: '*', element: <h1>Not found</h1>}
    ]
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                {
                    menu.map((item, index) => (
                        <Route path={item.path} element={item.element} index={item.index} key={index}/>
                    ))
                }
            </Routes>
        </div>
    )
}

export default App
