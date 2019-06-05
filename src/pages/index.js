import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { withRouter } from 'umi';
import PropTypes from 'prop-types';
import logo from '@/assets/logo.svg';
import { Player } from '@/components';
import classnames from 'classnames';
import styles from './index.less';

@withRouter
@connect(({ player }) => ({
  isPlay: player.isPlay,
}))
class App extends PureComponent {
  render() {
    const { isPlay } = this.props;
    const logoClass = classnames(styles.logo, { [styles.logopaused]: isPlay });
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
          <div>Soolx 2019</div>
        </footer>
      </div>
    );
  }
}

App.defaultProps = {
  // dispatch: () => {},
  isPlay: false,
};

App.propTypes = {
  // dispatch: PropTypes.func,
  isPlay: PropTypes.bool,
};

export default App;
