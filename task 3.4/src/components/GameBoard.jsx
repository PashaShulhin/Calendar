import React from "react";
import { useGameStore } from "../store/useGameStore";

const GameBoard = ({ player }) => {
  const {
    board,
    setBoard,
    currentPlayer,
    setCurrentPlayer,
    winner,
    setWinner,
    incrementXWins,
    incrementOWins,
  } = useGameStore();

  const isDisabled = player !== currentPlayer || winner;

  const handleClick = (index) => {
    if (board[index] || isDisabled) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    const win = checkWinner(newBoard);

    if (win) {
      setWinner(win);

      if (win === "X") incrementXWins();
      if (currentPlayer === "O") incrementOWins();

      setTimeout(() => {
        useGameStore.getState().resetGame();
      }, 5000);
    } else {
      setCurrentPlayer(nextPlayer);
    }
  };

  return (
    <div className="game-board">
      {board.map((cell, i) => (
        <button
          className="cell"
          key={i}
          onClick={() => handleClick(i)}
          disabled={isDisabled || cell}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

function checkWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default GameBoard;
