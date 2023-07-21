import './App.css';
import React from 'react';
import Verso from './components/verso/verso';
// import verso from './img/verso.jpg'; // Face Down Card
// import dialga from './img/dialga.png';

function App() {
  return (
    <div className="App">
      <div class="memory-game">
        <div class="left-options">
          <p>Test</p>
        </div>
        <div class="cards-grid">
          {Array(30).fill(<Verso />)}
        </div>
      </div>
    </div>
  );
}

export default App;
