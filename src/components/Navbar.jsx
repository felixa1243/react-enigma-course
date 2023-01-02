import {ROUTES} from "../constant/Routes.js";
import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import logo from '../assets/images/enigmalogo.png'

const menu = [
    {path: ROUTES.COURSE_LIST, text: "Course List"},
    {path: ROUTES.ADD_COURSE, text: "Add Course"},
    {path: ROUTES.TYPE_LIST, text: "Type List"},
    {path: ROUTES.ADD_TYPE, text: "Add type List"},
]
const Navbar = ({onClick}) => {
    return (
        <nav className={'flex h-[60px] items-center p-8 justify-between gap-4'}>
            <div>
                <img src={logo} className={'h-[40px]'} alt={'enigma logo'}/>
            </div>
            <div className={'flex h-full items-center'}>
                {
                    menu.map((item, index) => (
                        <div>
                            <Link to={item.path === ROUTES.COURSE_LIST ? item.path + '?title=from nav' : item.path}
                                  className={'ml-4 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg'}
                                  key={index}
                            >{item.text}</Link>
                        </div>
                    ))
                }
                <Button className={'px-4 py-2'} onClick={onClick}>Logout</Button>
            </div>
        </nav>
    )
}
export default Navbar