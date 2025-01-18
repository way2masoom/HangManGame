import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    // States Variable  also called React Hook 
    const [inputType, setInputType] = useState("password")
    // let inputType = "password";

    // Making one more Sates Variable to store the Input Data 
    const [value, setValue] = useState("");

    // Navigate to the path 
    const navigate = useNavigate(); // useNavigate is a function that returns a navigation function


    // To prevent the form Summation
    function handelFormSubmit(event) {
        event.preventDefault();
        console.log("Form submit Prevented", value);

        // React Router Dom Using Logic
        if (value) {
            // if we have something in the value then we want to go to the play Page 

            // Query Param
            navigate(`/play?text=${value}`)
            // navigate(`/play`, { state: { word: value } }); // Making a state Object to pass the input text
        }
    }

    // Form to handel Change when text is input
    function handelTextInputChange(event) {
        console.log("Text Input change");
        console.log(event.target.value);
        setValue(event.target.value);


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