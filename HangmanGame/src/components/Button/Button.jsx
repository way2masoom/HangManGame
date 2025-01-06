
function Button({ text, onClickHandler }) {
    // console.log({text}); // object text='Click me'
    return (
        <button onClick={onClickHandler}
            className="text-white bg-blue-500"
        >

            {text}
        </button>
    );
}

export default Button;