import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title"><img src={logo} className="App-logo" alt="logo" />React Music Player</div>
        </header>
        <content className="App-content">

        </content>
        <footer className="App-footer">
          <div>Soolx 2018</div>
        </footer>
      </div>
    );
  }
}

export default App;
