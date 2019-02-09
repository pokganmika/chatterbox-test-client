import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ChatCard from '../Common/ChatCard';

class PostSubmit extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      userName: '',
      text: '',
      texts: [],
      chats: [],
      roomId : 1
      // roomId : null
    };
  }

  async componentDidMount() {
    const { data } = await axios.get('/post');
    // console.log('이것이 다타 : ',data)
    this.setState({
      chats: data
    })
    console.log('Chat => this.state.chat : ',this.state.chats)
  }

  _writeChat = e => { 
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  _sendChat = async () => { 
    const { userName, text, roomId } = this.state;
    await axios.post('/post', { userName, text, roomId })
      .then(async res => { 
        console.log('send chat complete')

        const { data } = await axios.get('/post')
        this.setState({
          chats: data
        })

      })
      .catch(res => { 
        console.log('sending failed')
      })
  }

  _chatRender = () => { 
    const { chats } = this.state;
    return (
      chats.reverse().map(chat => (
        <ChatList
        name={chat.userName}
        text={chat.text}
        />
      ))
    );
  }

  render () { 
    const { chats } = this.state;
    return (
      <React.Fragment>
        <input
          type='text'
          placeholder='username'
          name={'userName'}
          value={this.state.userName}
          onChange={this._writeChat}
        />
        <input
          type='text'
          placeholder='text'
          name={'text'}
          value={this.state.text}
          onChange={this._writeChat}
        />
        {/* <input type='text' placeholder='roomname'/> */}
        <input
          type='submit'
          value="Submit"
          onClick={this._sendChat} />
        {chats.length !== 0 ? this._chatRender() : 'Loading'}
      </React.Fragment>
    );
  }
}

const ChatList = ({ name, text}) => { 
  return (
    <React.Fragment>
      <DivChat>
        <ChatCard
          name={name}
          text={text}
        />
      </DivChat>
    </React.Fragment>
  );
}

const DivChat = styled.div`
  margin: 1rem;
`; 

export default PostSubmit;
