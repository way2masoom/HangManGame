import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";

function Home() {
    // Defining a useState for the Words
    const [word, setWord] = useState('');

    // Defining a function to Fetch the words from the server/Network
    async function fetchWords() {
        // Fetching data
        const response = await fetch('http://localhost:3000/words/');
        const data = await response.json(); // converting the data into Json file
        console.log(data);

        // Printing a random Index
        const randomIndex = Math.floor(Math.random() * data.length)
        console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue)
    }

    //Using 'useEffect' to get the words
    useEffect(() => {
        fetchWords();
    }, [])

    // UI On home Page
    return (
        <>
            <Link to="/play" state={{ wordSelected: word }} >
                <Button text="Single Player Game!" /></Link> <br />
            <div className="mt-4">
                <Link to="/start">
                    <Button text="Multi Player Game!" styleType="secondary" /></Link>
            </div>
        </>
    );
}

export default Home;