import { useState } from "react";
import Card from "../Card/card";
import "./Grid.css";
import IsWinner from "../../Helpers/checkWinner";
function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true); // true => X, false => X
  const [winner, setWinner] = useState(null);

  function Play(index) {
    if (turn === true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }
    const win = IsWinner(board, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    setTurn(true);
    setWinner(null);
    setBoard(Array(numberOfCards).fill(""));
  }
  return (
    <div className="grid-wrapper">
      {winner && (
        <>
          <h1 className="turn-highlt">winner is: {winner}</h1>
          <button className="reset" onClick={reset}>
            Reset Game
          </button>
        </>
      )}
      <h1 className="turn-highlight">Current Turn:{turn ? " O" : " X"}</h1>
      <div className="Grid">
        {board.map((el, index) => (
          <Card
            gameEnd={winner ? true : false}
            key={index}
            onPlay={Play}
            player={el}
            index={index}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default Grid;
