import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FlashCardContainer } from './components/flashCardContainer';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <FlashCardContainer />
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
