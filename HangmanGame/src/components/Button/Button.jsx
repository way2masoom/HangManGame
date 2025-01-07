// Importing the stylingButton file
import getButtonStyling from "./getButtonStyling";

function Button({ text, onClickHandler, styleType = "primary" }) {
    return (
        <button onClick={onClickHandler}
            // Calling the getButtonStyling Function
            className={`px-4 py-3 ${getButtonStyling(styleType)} text-white`}
        >

            {text}
        </button>
    );
}


export default Button;