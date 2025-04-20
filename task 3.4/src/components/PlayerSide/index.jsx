import React from "react";
import GameBoard from "../GameBoard/index.jsx";
import Chat from "../chat/index.jsx";
import InfoPanel from "../infoPanel/index.jsx";

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
