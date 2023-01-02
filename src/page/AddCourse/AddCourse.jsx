import {ROUTES} from "../../constant/Routes.js";
import {useNavigate} from 'react-router-dom'
import FormInput from "../../components/FormInput.jsx";
import Button from "../../components/Button.jsx";
import useAddCourse from "./useAddCourse.js";
import {FORM_LIST} from "../../constant/FormList.js";

const AddCourse = () => {
    const navigate = useNavigate()
    const {getter, setter} = useAddCourse()
    console.log(getter)
    return (
        <div className={'flex flex-col px-4 w-full h-full items-center mb-6'}>
            <h3 className={'text-lg mt-4'}>Add course</h3>
            <form className={'flex flex-col'}>
                {FORM_LIST.map(
                    (f, index) => {
                        return (
                            <FormInput
                                type={f.type}
                                label={f.label}
                                placeholder={f.placeholder}
                                onChange={setter[f.id]}
                                key={index}
                            />
                        )
                    }
                )}
            </form>
            <Button className={'py-2 px-4'} onClick={() => navigate(ROUTES.COURSE_LIST + '?title=from add course')}>Go
                to course list</Button>
        </div>
    )
}
export default AddCourse