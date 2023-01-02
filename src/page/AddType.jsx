import {Routes} from "../constant/index.js";

const AddType = ({onNavigate})=>{
    return (
        <div>
            <h3>Add Type</h3>
            <p>Params :contoh params</p>
            <button onClick={()=>onNavigate(Routes.TYPE_LIST)}>Go to type list</button>
        </div>
    )
}
export default AddType