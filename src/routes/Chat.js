import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Room from '../components/Home/Room';
import Post from '../components/Home/Post';

class Chat extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      chats: []
    };
  }

  async componentDidMount() {
    const { data } = await axios.get('/post');
    // console.log('이것이 다타 : ',data)
    this.setState({
      ...this.state,
      chats: data
    })
    console.log('Chat => this.state.chat : ',this.state.chats)
  }

  _chatRender = () => { 
    const { chats } = this.state;
    // if (chats.length !== 0) { 
    //   return (
        
    //   );
    // }
    return (
      chats.map(chat => {
        return (
          <ChatList
          name={chat.userName}
          text={chat.text}
          />
        );
      })
    );
  }

  render () { 
    const { chats } = this.state; 
    return (
      <Fragment>
        <h1>Chat</h1>
        <Room /><br />
        <Post />
        {chats.length !== 0 ? this._chatRender() : 'Loading'}
      </Fragment>
    );
  }
}

const ChatList = ({ name, text}) => { 
  return (
    <React.Fragment>
      <div>{name}</div>
      <div>{text}</div>
    </React.Fragment>
  );
}

export default Chat;
