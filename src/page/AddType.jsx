import {ROUTES} from "../constant/Routes.js";
import {useLocation, useNavigate} from "react-router-dom";

const AddType = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div>
            <h3>Add Type</h3>
            <p>Params :{location?.state?.title}</p>
            <button onClick={() => navigate(ROUTES.TYPE_LIST,{
                state:{
                    title:'from add type'
                }
            })}>Go to type list</button>
        </div>
    )
}
export default AddType