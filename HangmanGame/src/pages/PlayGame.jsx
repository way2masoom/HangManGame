import { Link, useLocation, useSearchParams, } from "react-router-dom";

function PlayGame() {
    let location = useLocation()
    console.log(location);
    // const word = location.state.word;

    const [searchParam] = useSearchParams();
    const text = searchParam.get("text");

    return (
        <>
            <h1>Play Game</h1>
            <h2>{text}</h2>
            {/* Text Of the StartGame  */}
            {/* <h1>{word}</h1> */}

            <Link to='/start' className="text-blue-500">Start Game Link</Link>
        </>
    );
}

export default PlayGame;   