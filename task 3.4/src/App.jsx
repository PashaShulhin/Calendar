import React from "react";
import PlayerSide from "./components/PlayerSide";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard"; 

const App = () => {
  return (
    <div>
      <div className="scoreBoard">
        <ScoreBoard />
      </div>
      <div className="PlayerSide">
        <PlayerSide player="X" />
        <PlayerSide player="O" />
      </div>
    </div>
  );
};

export default App;
