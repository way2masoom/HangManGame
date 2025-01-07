// Input Function
function TextInput({ type = "text", label, placeholder = "Enter Your Input here", onChangeHandler }) {
    return (
        <label>
            <span className="text-red-500">{label}</span>
            <input type={type} className="px-4 py-2 border-gray-50 rounded-md w-full"

                placeholder={placeholder}
                onChange={onChangeHandler}
            />
 

        </label>
    )
}


export default TextInput;