import React from "react";
import UncontrolledForm from "./uncontrolled/index.jsx";
import ControlledForm from "./controlled/index.jsx";
import "./App.css";

function App() {
  return (
    <div className="forms">
      <div>
        <UncontrolledForm />
      </div>
      <div>
        <ControlledForm />
      </div>
    </div>
  );
}

export default App;
