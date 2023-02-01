// @ts-nocheck
import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import LikeButton from "./components/LikeButton";
import MouseTracker from "./components/MouseTracker";
import useMousePosition from "./hooks/useMousePosition";
import useUrlLoader from "./hooks/useUrlLoader";

interface IShowResult {
    message: String;
    status: String;
}

function App() {
    const positions = useMousePosition()
    const [show, setShow] = useState(true)
    const [data, loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random', [show])
    const dogResult = data as IShowResult
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>x:{positions.x}, y:{positions.y}</p>
        <LikeButton/>
        <MouseTracker/>
        <button onClick={()=>setShow(!show)}>refresh dog photo</button>
        {loading ? <p>🐕读取中</p>:<img src={dogResult && dogResult.message}/>}
      </header>
    </div>
  );
}

export default App;
