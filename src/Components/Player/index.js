import React, { Component } from 'react'
import cd from '../../assets/cd.svg'
import '../../assets/player-control-iconfont/iconfont.css'
import './index.less'

class Player extends Component {
  state = {
    isplay: true,
    list: this.props.musiclist,
    seleted: 0,
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

  toggle_next = () => {
    if(this.state.seleted < (this.state.list.length - 1)){
      this.setState(prevState => ({seleted: (prevState.seleted + 1)}));
    }
  }

  toggle_prev = () => {
    if(this.state.seleted > 0){
      this.setState(prevState => ({seleted: (prevState.seleted - 1)}));
    }
  }

  render() {
    const { isplay, list, seleted } = this.state;
    return (
      <div>
        <audio src={list[seleted].url} autoPlay="autoplay" ref="audio"></audio>
        <div className="playervis">
          <img src={cd} className="cd" alt="cd" />
          <div className="details">
            <div className="name">{list[seleted].name}</div>
            <div className="artist">{list[seleted].artist}</div>
          </div>
          
        </div>
        <div>
          <i onClick={this.toggle_prev} className="icon iconfont icon-prev"></i>
          <i onClick={this.togglePlayStatus} className={"icon iconfont icon-" + (isplay?"pause":"play")}></i>
          <i onClick={this.toggle_next} className="icon iconfont icon-next"></i>
        </div>

      </div>
    );
  }
}

export default Player;