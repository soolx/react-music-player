import React, { Component } from 'react'
import cd from '../../assets/cd.svg'
import '../../assets/player-control-iconfont/iconfont.css'
import './index.less'

class Player extends Component {
  state = {
    isplay: false,
    list: this.props.musiclist,
    seleted: 0,
    seletedTimeDuration: 1,
    seletedCurrentTime: 0,
  }

  // 暂停
  pause = () => {
    this.refs.audio.pause();
    this.setState({isplay: false});
    this.props.togglePlayStatus(true);
  }

  // 播放
  play = () => {
    this.refs.audio.play();
    this.setState({isplay: true});
    this.props.togglePlayStatus(false);
  }

  // 切换播放状态
  togglePlayStatus = () => {
    this.state.isplay?this.pause():this.play();
  }

  // 下一首
  toggle_next = () => {
    if(this.state.seleted < (this.state.list.length - 1)){
      this.setState(prevState => ({seleted: (prevState.seleted + 1)}));
    } else {
      this.setState({seleted: 0});
    }
  }

  // 上一首
  toggle_prev = () => {
    if(this.state.seleted > 0){
      this.setState(prevState => ({seleted: (prevState.seleted - 1)}));
    } else {
      this.setState({seleted: (this.state.list.length - 1)});
    }
  }

  // 添加绑定事件
  add_event = () => {
    // 音频结束事件
    this.refs.audio.onended = () => {this.toggle_next()};
    // 音频时间改变事件
    this.refs.audio.ondurationchange = () => {
      this.setState({ seletedTimeDuration: this.refs.audio.duration});
    }
    this.refs.audio.ontimeupdate = () => {
      this.setState({ seletedCurrentTime : this.refs.audio.currentTime});
    }
  }

  componentDidMount = () => {
    this.add_event();
  }

  render() {
    const { isplay, list, seleted, seletedTimeDuration, seletedCurrentTime } = this.state;
    const currentProgress = (seletedCurrentTime/seletedTimeDuration) * 100 + "%";
    return (
      <div>
        <audio src={list[seleted].url} preload="auto" ref="audio"></audio>
        <div className="infobackground">
          <div className="info"> 
            <img src={cd} className={"cd" + (isplay?"":" cdpaused")} alt="cd" />
            <div className="details">
              <div className="name">{list[seleted].name}</div>
              <div className="artist">{list[seleted].artist}</div>
            </div>
          </div>
        </div>

        <div className="progressbar">
          <svg>
            <rect width="100%" height="10" fill="#ccc" rx="3" ry="5"></rect>
            <rect width={ currentProgress } height="10" fill="#0078bc" rx="3" ry="5"></rect>
          </svg>
        </div>
        
        <div className="playcontrols">
          <i onClick={this.toggle_prev} className="icon iconfont icon-prev"></i>
          <i onClick={this.togglePlayStatus} className={"icon iconfont icon-" + (isplay?"pause":"play")}></i>
          <i onClick={this.toggle_next} className="icon iconfont icon-next"></i>
        </div>

      </div>
    );
  }
}

export default Player;