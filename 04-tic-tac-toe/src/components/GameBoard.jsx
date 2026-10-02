

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {

  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }
//  const [gameBoard, setGameBoard] = useState(initialGameBoard);

 // function handleSelectSquare(rowIndex, colIndex) {
  //  setGameBoard((prevGameBoard) => {  //prev___ is a fn that automatically provide previous state 
    //  const updatedBoard = prevGameBoard.map((innerArray) => [...innerArray]); //new exact copy with inner row and column - so that real square boxed cannotmbe changed
      //updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //  return updatedBoard;
   // });

  //  onSelectSquare();
 // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}