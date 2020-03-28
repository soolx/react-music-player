import React, { useCallback, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'umi';
import classnames from 'classnames';
import { secToTime } from '@/utils/util';
import cd from '@/assets/cd.svg';
import Icon from '../Icon';
import styles from './index.less';

export default function Player() {
  const { isPlay, selected, timeDuration, currentTime } = useSelector(
    state => state.player,
  );
  const playList = useSelector(state => state.list.playList);
  const audio = useRef(null);
  const barContainer = useRef(null);
  const barCurrent = useRef(null);
  const dispatch = useDispatch();
  const currentProgress = `${(currentTime / timeDuration) * 100}%`;

  // 控制audio
  const operatePlayer = useCallback(
    status => {
      const AudioPlayer = audio.current;
      if (status || isPlay) {
        AudioPlayer.play();
      } else {
        AudioPlayer.pause();
      }
    },
    [isPlay],
  );

  // 下一首
  const toggleNext = useCallback(() => {
    dispatch({
      type: 'player/nextSong',
    });
  }, [dispatch]);

  const setTimeDuration = useCallback(
    value => {
      dispatch({
        type: 'player/saveTimeDuration',
        payload: value,
      });
    },
    [dispatch],
  );

  const setCurrentTime = useCallback(
    value => {
      dispatch({
        type: 'player/saveCurrentTime',
        payload: value,
      });
    },
    [dispatch],
  );

  // 添加绑定事件
  useEffect(() => {
    const AudioPlayer = audio.current;
    const progressBarContainer = barContainer.current;
    const progressBarCurrent = barCurrent.current;
    // 音频结束事件
    AudioPlayer.onended = () => {
      toggleNext();
    };
    // 音频时间改变事件
    AudioPlayer.ondurationchange = () => {
      setTimeDuration(AudioPlayer.duration);
    };
    // 音频播放位置改变事件
    AudioPlayer.ontimeupdate = () => {
      setCurrentTime(AudioPlayer.currentTime);
    };
    // 音频就绪事件
    AudioPlayer.oncanplay = () => {
      operatePlayer();
    };
    // 进度条点击事件
    progressBarContainer.onclick = e => {
      const pbgobj = progressBarContainer.getBoundingClientRect();
      const clickTime =
        ((e.clientX - pbgobj.left) / (pbgobj.right - pbgobj.left)) *
        timeDuration;
      AudioPlayer.currentTime = clickTime;
      setCurrentTime(clickTime);
    };

    progressBarCurrent.onclick = e => {
      progressBarContainer.onclick(e);
    };
    return () => {};
  }, [
    setTimeDuration,
    setCurrentTime,
    operatePlayer,
    toggleNext,
    timeDuration,
  ]);

  useEffect(() => {
    operatePlayer();
  }, [isPlay, operatePlayer]);

  // 切换播放状态
  const togglePlayStatus = useCallback(() => {
    dispatch({
      type: 'player/changePlayStatus',
    });
  }, [dispatch]);

  // 上一首
  const togglePrev = useCallback(() => {
    dispatch({
      type: 'player/prevSong',
    });
  }, [dispatch]);

  return (
    <div>
      <audio src={playList[selected].url} preload="auto" ref={audio} />
      <div className={styles.playermain}>
        <div className={styles.infobackground}>
          <div className={styles.info}>
            <img
              src={cd}
              className={classnames(styles.cd, { [styles.cdpaused]: !isPlay })}
              alt="cd"
            />
            <div className={styles.details}>
              <div className={styles.name}>{playList[selected].name}</div>
              <div className={styles.artist}>{playList[selected].artist}</div>
            </div>
          </div>
        </div>

        <div className={styles.progressbar}>
          <svg>
            <text x="0" y="15" fill="#666666" fontSize="1vm">
              {secToTime(currentTime)}
            </text>
            <text
              x="36vw"
              y="15"
              fill="#666666"
              fontSize="1vm"
              textAnchor="end"
            >
              {secToTime(timeDuration)}
            </text>
            <rect
              y="20"
              width="100%"
              height="10"
              fill="#ccc"
              rx="3"
              ry="5"
              ref={barContainer}
            />
            <rect
              y="20"
              width={currentProgress}
              height="10"
              fill="#666666"
              rx="3"
              ry="5"
              ref={barCurrent}
            />
          </svg>
        </div>
      </div>

      <div className={styles.playcontrols}>
        <Icon type="icon-prev" onClick={togglePrev} />
        <Icon
          type={`icon-${isPlay ? 'pause' : 'play'}`}
          onClick={togglePlayStatus}
        />
        <Icon type="icon-next" onClick={toggleNext} />
      </div>
    </div>
  );
}
