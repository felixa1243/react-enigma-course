import {Routes} from "../constant/index.js";

const menu = [
    {path: Routes.COURSE_LIST, text: "Course List"},
    {path: Routes.ADD_COURSE, text: "Add Course"},
    {path: Routes.TYPE_LIST, text: "Type List"},
    {path: Routes.ADD_TYPE, text: "Add type List"},
]
const Navbar = ({onNavigate}) => {
    return (
        <nav>
            {
                menu.map((item, index) => (
                    <a href={item.path}
                       style={{marginLeft: 10, textDecoration: "none", color: "black"}}
                       onClick={e => {
                           e.preventDefault()
                           return onNavigate(item.path)
                       }}
                       key={index}
                    >{item.text}</a>
                ))
            }
        </nav>
    )
}
export default Navbar