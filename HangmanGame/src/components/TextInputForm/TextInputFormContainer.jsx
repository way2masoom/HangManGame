import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
 
    // States Variable  also called React Hook 
    const [inputType, setInputType] = useState("password")
    // let inputType = "password";

    // To prevent the form Summation
    function handelFormSubmit(event) {
        event.preventDefault();
        console.log("Form submit Prevented");

    }

    // Form to handel Change when text is input
    function handelTextInputChange(event) {
        console.log("Text Input change");
        console.log(event.target.value);

    }

    // Function to handle Show or Hide Btn
    function handelShowHideClick() {
        if (inputType === "password") {
            setInputType("text")
        } else {
            setInputType("password")
        }

        console.log(inputType);


    }

    return (<TextInputForm
        inputType={inputType}
        handelFormSubmit={handelFormSubmit}
        handelTextInputChange={handelTextInputChange}
        handelShowHideClick={handelShowHideClick}
    />
    );
}

export default TextInputFormContainer;