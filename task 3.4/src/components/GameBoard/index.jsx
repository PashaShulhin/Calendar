import React from "react";
import { useGameStore } from "../../store/useGameStore";
import { checkWinner } from "../../utils/checkWinner.js";

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

export default GameBoard;
