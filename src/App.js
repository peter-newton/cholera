import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <iframe width="600" height="500" frameBorder="0" scrolling="no" src="//plotly.com/~pnewton/17.embed"></iframe>

      <iframe width="600" height="500" frameBorder="0" scrolling="no" src="//plotly.com/~pnewton/9.embed"></iframe>

      <iframe width="600" height="500" frameBorder="0" scrolling="no" src="//plotly.com/~pnewton/13.embed"></iframe>

      <iframe width="900" height="800" frameBorder="0" scrolling="no" src="/Total Fatalities.html"></iframe>
    </div>
  );
}

export default App;
