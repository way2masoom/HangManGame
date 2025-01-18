import { Link, useLocation, } from "react-router-dom";

function PlayGame() {
    const { state } = useLocation()

    return (
        <>
            <h1>Play Game</h1>
            {/* Text Of the StartGame  */}
            <h1>{state.wordSelected}</h1>

            <Link to='/start' className="text-blue-500">Start Game Link</Link>
        </>
    );
}

export default PlayGame;   