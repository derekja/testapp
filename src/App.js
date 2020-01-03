import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Story } from 'inkjs';
import storyContent from "./intercept.ink.json";
export const ink = new Story(storyContent);

function App() {
  return (
    <div className="App">s
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
