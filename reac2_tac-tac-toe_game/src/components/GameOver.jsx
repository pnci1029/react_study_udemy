export default function GameOver({winner, onRestart}) {
    let winnerStatus = <p>{winner} win!</p>;
    if (!winner) {
        winnerStatus = <p>draw!</p>
    }
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winnerStatus}
            <button onClick={onRestart}>rematch?</button>
        </div>
    );
};