import React, { Component, Fragment } from 'react';
// import axios from 'axios';

import Room from '../components/Chat/Room';
import Post from '../components/Chat/Post';

class Chat extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      roomName: ''
    };
  }
  
  _writeRoom = e => { 
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () { 
    return (
      <Fragment>
        <h1>Chat</h1>
        <Room _writeRoom={this._writeRoom} /><br />
        <Post />
      </Fragment>
    );
  }
}

export default Chat;
