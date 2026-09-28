import StartGame from "./components/StartGame.jsx";
import GamePlay from "./components/GamePlay.jsx";
import { useState} from "react";


const App = () => {

    const[isGameStarted , setisGameStarted] = useState(true);

    const toggleGamePlay = () => {
        setisGameStarted((prev) => !prev);
    };

    return (
        <>
            {isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGamePlay}/> }
        </>
    );
}

export default App;