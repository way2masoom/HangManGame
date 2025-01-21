import { Link, useLocation, } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LettersButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";

function PlayGame() {
    const { state } = useLocation()

    // when variable changed the UI should also changed || State Variable 
    const [guessedLetters, setGuessedLetters] = useState([]);

    // FUnction to handle the letter Click 
    function handleLetterClick(letter) {
        setGuessedLetters([...guessedLetters, letter])
    }



    return (
        <>
            <h1>Play Game</h1>
            {/* Text Of the StartGame  */}
            {/* <h1>{state.wordSelected}</h1> <br /> */}

            {/* Masked Function for the guessing the Letters */}
            <MaskedText text={state.wordSelected} guessedLetters={guessedLetters} /> <br />

            <div>
                <LettersButtons text={state.wordSelected} guessedLetters={[guessedLetters]} onLetterClick={handleLetterClick} />
            </div>

            <Link to='/start' className="text-blue-500 m-2">Start Game Link</Link>
        </>
    );
}

export default PlayGame;   