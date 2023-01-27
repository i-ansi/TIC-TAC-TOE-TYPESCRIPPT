import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Square from "../Square/Square";
import "./Canvas.css";

type CanvasProps = {
  x: string;
  y: string;
};

function Canvas(props: CanvasProps) {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [playerAcheck, setPlayerAcheck] = React.useState<boolean>(true);

  function checkWinner() {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (
        square[a] !== null &&
        square[a] === square[b] &&
        square[b] == square[c]
      ) {
        return square[a];
      }
    }

    if (square.includes(null) === false) {
      return "Draw!";
    }
    return false;
  }
  const isWin = checkWinner();
  let audioClick = new Audio("/click.mp3");
  //   function Click() {

  //   }
  const handleClick = (i: number): void => {
    audioClick.play();
    if (square[i] !== null) {
      return;
    }
    const copySquare = [...square];
    copySquare[i] = playerAcheck ? "X" : "O";
    setSquare(copySquare);
    setPlayerAcheck(!playerAcheck);
  };

  const handleReset = () => {
    window.location.reload();
  };
  const handleAgain = () => {
    setSquare(Array(9).fill(null));
  };

  return (
    // <div>
    <div className="board-container">
      <h1 id="title-1">Tic Tac Tac!</h1>
      <br />
      {isWin ? (
        <>
          <div className="board-row">
            <Square value={square[0]} />
            <Square value={square[1]} />
            <Square value={square[2]} />
          </div>
          <div className="board-row">
            <Square value={square[3]} />
            <Square value={square[4]} />
            <Square value={square[5]} />
          </div>
          <div className="board-row">
            <Square value={square[6]} />
            <Square value={square[7]} />
            <Square value={square[8]} />
          </div>
          <div className="move">
            {isWin == "Draw!" ? (
              <>
                Match Draw!
                <button id="btn-1" onClick={handleReset}>
                  Restart
                </button>
                <button id="btn-1" onClick={handleAgain}>
                  Play Again
                </button>
                <Modal winner={"Draw!"} />
              </>
            ) : (
              <>
                {isWin == "X" ? props.x : props.y} wins the game!
                <button id="btn-1" onClick={handleReset}>
                  Restart
                </button>
                <button id="btn-1" onClick={handleAgain}>
                  Play Again
                </button>
                <Modal winner={isWin == "X" ? props.x : props.y} />
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={square[0]} />
            <Square onClick={() => handleClick(1)} value={square[1]} />
            <Square onClick={() => handleClick(2)} value={square[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={square[3]} />
            <Square onClick={() => handleClick(4)} value={square[4]} />
            <Square onClick={() => handleClick(5)} value={square[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={square[6]} />
            <Square onClick={() => handleClick(7)} value={square[7]} />
            <Square onClick={() => handleClick(8)} value={square[8]} />
          </div>
          <div className="move">
            <h4>{playerAcheck ? props.x : props.y}'s, turn!</h4>
            <button id="btn-1" onClick={handleReset}>
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Canvas;
