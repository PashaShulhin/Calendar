import React from "react";
import UncontrolledForm from "./uncontrolled/index.jsx";
import ControlledForm from "./controlled/index.jsx";
import "./App.css";

function App() {
  return (
    <div className="forms">
      <div className="form1">
        <UncontrolledForm />
      </div>
      <div className="form2">
        <ControlledForm />
      </div>
    </div>
  );
}

export default App;
