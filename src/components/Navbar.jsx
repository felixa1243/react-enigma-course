import {ROUTES} from "../constant/index.js";
import {Link} from "react-router-dom";

const menu = [
    {path: ROUTES.COURSE_LIST, text: "Course List"},
    {path: ROUTES.ADD_COURSE, text: "Add Course"},
    {path: ROUTES.TYPE_LIST, text: "Type List"},
    {path: ROUTES.ADD_TYPE, text: "Add type List"},
]
const Navbar = () => {
    return (
        <nav>
            {
                menu.map((item, index) => (
                    <Link to={item.path}
                       style={{marginLeft: 10, textDecoration: "none", color: "black"}}
                       key={index}
                    >{item.text}</Link>
                ))
            }
        </nav>
    )
}
export default Navbar