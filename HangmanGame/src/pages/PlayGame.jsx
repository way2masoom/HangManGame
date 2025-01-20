import { Link, useLocation, } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame() {
    const { state } = useLocation()

    return (
        <>
            <h1>Play Game</h1>
            {/* Text Of the StartGame  */}
            {/* <h1>{state.wordSelected}</h1> <br /> */}

            {/* Masked Function for the guessing the Letters */}
            <MaskedText text={state.wordSelected} guessedLetters={['h', 'e']} /> <br />

            <Link to='/start' className="text-blue-500 m-2">Start Game Link</Link>
        </>
    );
}

export default PlayGame;   