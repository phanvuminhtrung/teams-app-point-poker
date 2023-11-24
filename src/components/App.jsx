import React from "react";
import SessionManager from './SessionManager';
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Planning Poker</h1>
      <SessionManager />
    </div>
  );
}

export default App;
