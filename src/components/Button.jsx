const Button = (props)=>{
    return (
        <button {...props}
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${props.className}`} >{props.children}</button>
    )
}
export default Button