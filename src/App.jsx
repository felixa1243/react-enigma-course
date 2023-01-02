import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from 'react-router-dom';
import CourseList from "./page/CourseList.jsx";
import AddCourse from "./page/AddCourse.jsx";
import EditCourse from "./page/EditCourse.jsx";
import {ROUTES} from "./constant/index.js";
import TypeList from "./page/TypeList.jsx";
import AddType from "./page/AddType.jsx";

function App() {
    // const menu = [
    //     {path: "/",index:true, element: <h1>Dashboard Page</h1>},
    //     {path: ROUTES.COURSE_LIST, element: <CourseList/>},
    //     {path: ROUTES.TYPE_LIST, element: <TypeList/>},
    //     {path: ROUTES.ADD_COURSE, element: <AddCourse/>},
    //     {path: ROUTES.ADD_TYPE, element: <AddType/>},
    //     {path:`${ROUTES.EDIT_COURSE}/:id`, element: <EditCourse/>},
    //     {path: '*', element: <h1>Not found</h1>}
    // ]
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<h1>Dashboard</h1>} index={true}/>
                <Route path={ROUTES.COURSE_LIST}>
                    <Route element={<CourseList/>} index={true}/>
                    <Route path={ROUTES.ADD_COURSE} element={<AddCourse/>}/>
                    <Route path={`${ROUTES.EDIT_COURSE}/:id`} element={<EditCourse/>}/>
                </Route>
                <Route path={ROUTES.TYPE_LIST}>
                    <Route element={<TypeList/>} index={true}/>
                    <Route path={ROUTES.ADD_TYPE} element={<AddType/>}/>
                </Route>
                <Route path={'*'} element={<h3>Not found</h3>}/>

            </Routes>
        </div>
    )
}

export default App
