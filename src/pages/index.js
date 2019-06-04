import React, { Component } from 'react';
import logo from '@/assets/logo.svg';
import Player from '@/components/Player';
import musiclist from '@/config/example_music';
import styles from './index.less';

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
        <header className={styles.header}>
          <div className={styles.title}><img src={logo} className={styles.logo + ' ' + (this.state.isplay? '' : styles.logopaused)} alt="logo" />React Music Player</div>
        </header>
        <div className={styles.main}>
          <Player musiclist={musiclist} togglePlayStatus={this.togglePlayStatus}/>
        </div>
        <footer className={styles.footer}>
          <div>Soolx 2019</div>
        </footer>
      </div>
    );
  }
}

export default App;
