
import Player from './components/Player.jsx'
import GameBoard from "./components/GameBoard.jsx"
import {useState} from "react"
import Log from "./components/Log.jsx"
import {WinningCombinations} from "./components/winning-combination.js"
import GameOver from "./components/GameOver.jsx"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];    //initial gameboxes - null means empty boxes


function deriveActivePlayer(gameTurns) {    //fnctn tht defines who has the turn
  let currentPlayer = 'X';

      if(gameTurns.length > 0 && gameTurns[0].player === 'X') {   //if 1st turn has X then update curnt plye to O
        currentPlayer = 'O';
      }

      return currentPlayer;    //toggling currnt plye logic
}

function deriveWinner(gameBoard, Players) {   
    let winner = null;


 for (const combination of WinningCombinations) {    //loop tht ensure all the gamewin method boxes filled with same player to declare winner
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if  ( firstSquareSymbol &&
          firstSquareSymbol === secondSquareSymbol &&       //comparing boxes to determine plyr
          firstSquareSymbol === thirdSquareSymbol
        ) {
          winner = Players[firstSquareSymbol];

        }
 }

    return winner;

}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...initialGameBoard.map(array => [...array])];     //copy of gameboard array

    for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {

  const [Players , setPlayers]= useState({
    'X' : 'Player 1',
    'O' : 'Player 2',
  })
  const [gameTurns, setGameTurns] = useState([]);
  

 const activePlayer = deriveActivePlayer(gameTurns);
 const gameBoard = deriveGameBoard(gameTurns);

  

  const winner = deriveWinner(gameBoard, Players);

 const hasDraw = gameTurns.length === 9 && !winner;
  
  function handleSelectSquare(rowIndex, colIndex)  {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);


      const updatedTurns = [ {square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];

      return updatedTurns;
    });
  }

  function handleRestart() {
      setGameTurns([]); 
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  

  return (          //STRUCTURE OF THE WHOLE WINDOW
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
          initialName = "Player 1" 
          symbol="X" 
          isActive={activePlayer === 'X'}
          onChangeName={handlePlayerNameChange}
          />
          <Player 
          initialName="Player 2" 
          symbol="O" 
          isActive={activePlayer === 'O'}
          onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart = {handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}
        board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
