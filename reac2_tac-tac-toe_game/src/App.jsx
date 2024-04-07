import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import {useState} from "react";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from "./components/WINNING_COMBINATION.jsx";
import GameOver from "./components/GameOver";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);
    const [hasWinner, setHasWinner] = useState(false);
    const [players, setPlayers] = useState({
            'X': 'Player 1',
            'Y': 'Player 2'
        }
    );

    let gameBoard = [...initialGameBoard.map(array => [...array])];

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row] [col] = player;
    }
    function handleActivePlayer(rowIndex, colIndex) {
        setGameTurns((prevTurns) =>{
            const currentPlayer = deriveActivePlayer(prevTurns);

            return [{square: {row: rowIndex, col: colIndex}, player: currentPlayer},
                ...prevTurns];
        });
    }

    let winner = null;
    let hasDraw = false;
    for (const combination of WINNING_COMBINATIONS) {

        const firstSquare = gameBoard[combination[0].row][combination[0].column];
        const secondSquare = gameBoard[combination[1].row][combination[1].column];
        const thirdSquare = gameBoard[combination[2].row][combination[2].column];

        if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
            winner = players[firstSquare];
        }
        hasDraw = !winner && gameTurns.length >= 9;
    }

    function handleRestart() {
        setGameTurns([]);
        winner = null;
    }

    function handleSetPlayerName(symbol, newName) {
        setPlayers(prevPlayerName => {
            return{
                ...prevPlayerName,
                [symbol]: newName
            };
        });
    };

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handleSetPlayerName}/>
                    <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handleSetPlayerName}/>
                </ol>
                {(winner || hasDraw) &&  <GameOver winner={winner} onRestart={handleRestart} />}
                <GameBoard onSelectSquare={handleActivePlayer} board={gameBoard}/>
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App
