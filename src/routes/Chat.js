import React, { Component, Fragment } from 'react';
// import axios from 'axios';

import Room from '../components/Chat/Room';
import Post from '../components/Chat/Post';

class Chat extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      
    };
  }

  // async componentDidMount() {
  //   const { data } = await axios.get('/api/post');
  //   // console.log('이것이 다타 : ',data)
  //   this.setState({
  //     ...this.state,
  //     chats: data
  //   })
  //   console.log('Chat => this.state.chat : ',this.state.chats)
  // }

  // _chatRender = () => { 
  //   const { chats } = this.state;
  //   return (
  //     chats.map(chat => (
  //       <ChatList
  //       name={chat.userName}
  //       text={chat.text}
  //       />
  //     ))
  //   );
  // }

  render () { 
    // const { chats } = this.state; 
    return (
      <Fragment>
        <h1>Chat</h1>
        <Room /><br />
        <Post />
        {/* {chats.length !== 0 ? this._chatRender() : 'Loading'} */}
      </Fragment>
    );
  }
}

// const ChatList = ({ name, text}) => { 
//   return (
//     <React.Fragment>
//       <div>{name}</div>
//       <div>{text}</div>
//     </React.Fragment>
//   );
// }

export default Chat;
