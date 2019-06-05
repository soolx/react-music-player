import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { withRouter } from 'umi';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { secToTime } from '@/utils/util';
import cd from '@/assets/cd.svg';
import styles from './index.less';


@withRouter
@connect(({ player, list }) => ({
  isPlay: player.isPlay,
  playList: list.playList,
  selected: player.selected,
  timeDuration: player.timeDuration,
  currentTime: player.currentTime,
}))
class Player extends PureComponent {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.progressBarContainer = React.createRef();
    this.progressBarCurrent = React.createRef();
  }

  componentDidMount = () => {
    this.addEvent();
  }

  componentDidUpdate(prevProps) {
    const { isPlay } = this.props;
    if (isPlay !== prevProps.isPlay) {
      this.operatePlayer();
    }
  }

  // 控制audio
  operatePlayer = (status) => {
    const { isPlay } = this.props;
    const AudioPlayer = this.audio.current;
    if (status || isPlay) {
      AudioPlayer.play();
    } else {
      AudioPlayer.pause();
    }
  }


  // 切换播放状态
  togglePlayStatus = () => {
    // const { isPlay } = this.props;
    const { dispatch } = this.props;
    dispatch({
      type: 'player/changePlayStatus',
    });
  }

  // 下一首
  toggleNext = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'player/nextSong',
    });
  }

  // 上一首
  togglePrev = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'player/prevSong',
    });
  }

  setTimeDuration = (value) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'player/saveTimeDuration',
      payload: value,
    });
  }

  setCurrentTime = (value) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'player/saveCurrentTime',
      payload: value,
    });
  }

  // 添加绑定事件
  addEvent = () => {
    const AudioPlayer = this.audio.current;
    const progressBarContainer = this.progressBarContainer.current;
    const progressBarCurrent = this.progressBarCurrent.current;
    // 音频结束事件
    AudioPlayer.onended = () => { this.toggleNext(); };
    // 音频时间改变事件
    AudioPlayer.ondurationchange = () => {
      this.setTimeDuration(AudioPlayer.duration);
    };
    // 音频播放位置改变事件
    AudioPlayer.ontimeupdate = () => {
      this.setCurrentTime(AudioPlayer.currentTime);
    };
    // 音频就绪事件
    AudioPlayer.oncanplay = () => {
      this.operatePlayer();
    };
    // 进度条点击事件
    progressBarContainer.onclick = (e) => {
      const { selectedTimeDuration } = this.state;
      const pbgobj = progressBarContainer.getBoundingClientRect();
      const clickTime = (e.clientX - pbgobj.left)
        / (pbgobj.right - pbgobj.left) * selectedTimeDuration;
      AudioPlayer.currentTime = clickTime;
      this.setCurrentTime(clickTime);
    };

    progressBarCurrent.onclick = (e) => {
      progressBarContainer.onclick(e);
    };
  }

  render() {
    const {
      selected,
      timeDuration,
      currentTime,
    } = this.props;
    const { playList } = this.props;
    const { isPlay } = this.props;
    const currentProgress = `${(currentTime / timeDuration) * 100}%`;
    return (
      <div>
        <audio src={playList[selected].url} preload="auto" ref={this.audio} />
        <div className={styles.playermain}>
          <div className={styles.infobackground}>
            <div className={styles.info}>
              <img src={cd} className={classnames(styles.cd, { [styles.cdpaused]: !isPlay })} alt="cd" />
              <div className={styles.details}>
                <div className={styles.name}>{playList[selected].name}</div>
                <div className={styles.artist}>{playList[selected].artist}</div>
              </div>
            </div>
          </div>

          <div className={styles.progressbar}>
            <svg>
              <text x="0" y="15" fill="#666666" fontSize="1vm">{ secToTime(currentTime) }</text>
              <text x="36vw" y="15" fill="#666666" fontSize="1vm" textAnchor="end">{ secToTime(timeDuration) }</text>
              <rect y="20" width="100%" height="10" fill="#ccc" rx="3" ry="5" ref={this.progressBarContainer} />
              <rect y="20" width={currentProgress} height="10" fill="#666666" rx="3" ry="5" ref={this.progressBarCurrent} />
            </svg>
          </div>
        </div>

        <div className={styles.playcontrols}>
          <Icon type="icon-prev" onClick={this.togglePrev} />
          <Icon type={`icon-${isPlay ? 'pause' : 'play'}`} onClick={this.togglePlayStatus} />
          <Icon type="icon-next" onClick={this.toggleNext} />
        </div>
      </div>
    );
  }
}

Player.defaultProps = {
  dispatch: () => {},
  isPlay: false,
  playList: [],
  selected: 0,
  timeDuration: 1,
  currentTime: 0,
};

Player.propTypes = {
  dispatch: PropTypes.func,
  isPlay: PropTypes.bool,
  playList: PropTypes.arrayOf(PropTypes.any),
  selected: PropTypes.number,
  timeDuration: PropTypes.number,
  currentTime: PropTypes.number,
};

export default Player;
