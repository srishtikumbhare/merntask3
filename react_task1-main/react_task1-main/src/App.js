// src/App.js
import React from 'react';
import './App.css';
import WordCounter from './WordCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Responsive Paragraph Word Counter</h1>
      </header>
      <WordCounter />
    </div>
  );
}

export default App;
