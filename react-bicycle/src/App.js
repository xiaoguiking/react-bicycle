import React from "react";
import logo from "./logo.svg";
// import './App.css';
import "./index.less";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Button>点我测试</Button>
      <div className="name">name</div>
    </div>
  );
}

export default App;
