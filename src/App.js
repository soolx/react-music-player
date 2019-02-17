import React, { Component } from 'react'
import logo from './logo.svg'
import './App.less'
import Player from './Components/Player'
import musiclist from './example_music'

class App extends Component {
  state = {
    isplay: true,
  }

  togglePlayStatus = (value) => {
    this.setState({isplay: value});
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="title"><img src={logo} className={"logo" + (this.state.isplay?"":" logopaused")} alt="logo" />React Music Player</div>
        </header>
        <div className="main">
          <Player musiclist={musiclist} togglePlayStatus={this.togglePlayStatus}/>
        </div>
        <footer className="footer">
          <div>Soolx 2019</div>
        </footer>
      </div>
    );
  }
}

export default App;
