function Button({text,onClickHandler}) {
    // console.log({text}); // object text='Click me'
    return (
        <button onClick={onClickHandler}>
            {text}
        </button>
    );
}
 
export default Button;