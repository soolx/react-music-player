import React, { Component } from 'react'
import './index.less'
// import testmp3 from '../../assets/test.mp3';
// import test2mp3 from '../../assets/test2.mp3';
import cd from '../../assets/cd.svg';

class Player extends Component {
  state = {
    isplay: true,
    seleted: 'http://om4hqcoxy.bkt.clouddn.com/music/mp3/test.mp3',
  }

  pause = () => {
    this.refs.audio.pause();
    this.setState({isplay: false});
  }
  play = () => {
    this.refs.audio.play();
    this.setState({isplay: true});
  }

  togglePlayStatus = () => {
    this.state.isplay?this.pause():this.play();
  }

  toggle = () => {
    this.setState({seleted: this.state.seleted === 'http://om4hqcoxy.bkt.clouddn.com/music/mp3/test.mp3'?'http://om4hqcoxy.bkt.clouddn.com/music/mp3/test2.mp3':'http://om4hqcoxy.bkt.clouddn.com/music/mp3/test.mp3'});
  }
  render() {
    return (
      <div>
        <audio src={this.state.seleted} autoPlay="autoplay" ref="audio"></audio>
        <img src={cd} className="cd" alt="cd" />
        <button onClick={this.togglePlayStatus}>{this.state.isplay?'暂停':'播放'}</button>
        {/* <button onClick={this.pause}>暂停</button> */}
        <button onClick={this.toggle}>切歌</button>
      </div>
    );
  }
}

export default Player;