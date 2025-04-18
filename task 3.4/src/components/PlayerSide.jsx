import React from "react";
import GameBoard from "./GameBoard";
import Chat from "./Chat";
import InfoPanel from "./InfoPanel";

const PlayerSide = ({ player }) => {
  return (
    <div className="player-side">
      <h2>Player {player}</h2>
      <GameBoard player={player} />
      <InfoPanel player={player} />
      <Chat player={player} />
    </div>
  );
};

export default PlayerSide;
