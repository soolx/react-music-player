import React, { Component } from 'react'
import logo from './logo.svg'
import './App.less'
import Player from './Components/Player'
import musiclist from './example_music'

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="title"><img src={logo} className="logo" alt="logo" />React Music Player</div>
        </header>
        <div className="main">
          <Player musiclist={musiclist}/>
        </div>
        <footer className="footer">
          <div>Soolx 2018</div>
        </footer>
      </div>
    );
  }
}

export default App;
