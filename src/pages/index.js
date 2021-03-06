import React from 'react';
import { useSelector } from 'umi';
import classNames from 'classnames';
import { Player } from '@/components';
import logo from '@/assets/logo.svg';
import styles from './index.less';

export default function App() {
  const isPlay = useSelector(({ player }) => player.isPlay);
  const logoClass = classNames(styles.logo, { [styles.logopaused]: isPlay });
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.title}>
          <img src={logo} className={logoClass} alt="logo" />
          React Music Player
        </div>
      </header>
      <div className={styles.main}>
        <Player />
      </div>
      <footer className={styles.footer}>
        <div>Soolx 2020</div>
      </footer>
    </div>
  );
}
