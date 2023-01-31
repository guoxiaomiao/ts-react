// @ts-nocheck
import logo from './logo.svg';
import React from 'react';
import './App.css';
import LikeButton from "./components/LikeButton";
import MouseTracker from "./components/MouseTracker";
import useMousePosition from "./hooks/useMousePosition";

function App() {
    const positions = useMousePosition()
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>x:{positions.x}, y:{positions.y}</p>
        <LikeButton/>
        <MouseTracker/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
