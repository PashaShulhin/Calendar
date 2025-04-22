import React from "react";
import { useGameStore } from "../../store/useGameStore";

const ScoreBoard = () => {
  const score = useGameStore((state) => state.score);

  return (
    <div className="scoreboard">
      <h2>Score</h2>
      <p>🟦 Player 1: {score.X}</p>
      <p>🟥 Player 2: {score.O}</p>
    </div>
  );
};

export default ScoreBoard;
