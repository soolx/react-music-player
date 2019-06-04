import React, { Component } from 'react';
import logo from '@/assets/logo.svg';
import Player from '@/components/Player';
import musiclist from '@/config/example_music';
import classnames from 'classnames';
import styles from './index.less';

class App extends Component {
  state = {
    isplay: true,
  }

  togglePlayStatus = (value) => {
    this.setState({isplay: value});
  }

  render() {
    const { isplay } = this.state;
    const logoClass = classnames(styles.logo, {[styles.logopaused]: isplay});
    return (
      <div>
        <header className={styles.header}>
          <div className={styles.title}>
            <img src={logo} className={logoClass} alt="logo" />React Music Player
          </div>
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
