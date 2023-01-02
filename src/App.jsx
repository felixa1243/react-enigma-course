import {Outlet, Route, Routes} from 'react-router-dom';
import CourseList from "./page/CourseList.jsx";
import AddCourse from "./page/AddCourse.jsx";
import EditCourse from "./page/EditCourse.jsx";
import {ROUTES} from "./constant/index.js";
import TypeList from "./page/TypeList.jsx";
import AddType from "./page/AddType.jsx";
import {useState} from "react";
import Home from "./page/Home.jsx";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";

function App() {
    const Wrapper = (props) => {
        return (
            <div>
                <h3>{props.title}</h3>
                <Outlet/>
            </div>
        )
    }
    const [isLoggedIn, setLoggedIn] = useState(false)
    return (
        <div className="App">
            <Routes>
                <Route element={<Home onClick={() => {
                    setLoggedIn(true)
                }}
                                      isLoggedIn={isLoggedIn}
                />} index={true}/>
                <Route path={ROUTES.HOME}
                       element={<ProtectedRoute isLoggedIn={isLoggedIn} onClick={() => setLoggedIn(false)}/>}>
                    <Route path={ROUTES.COURSE_LIST} element={<Wrapper title={'Courses'}/>}>
                        <Route element={<CourseList/>} index={true}/>
                        <Route path={ROUTES.ADD_COURSE} element={<AddCourse/>}/>
                        <Route path={`${ROUTES.EDIT_COURSE}/:id`} element={<EditCourse/>}/>
                    </Route>
                    <Route path={ROUTES.TYPE_LIST} element={<Wrapper title={'Types'}/>}>
                        <Route element={<TypeList/>} index={true}/>
                        <Route path={ROUTES.ADD_TYPE} element={<AddType/>}/>
                    </Route>
                </Route>
                <Route path={'*'} element={<h3>Not found</h3>}/>

            </Routes>
        </div>
    )
}

export default App
