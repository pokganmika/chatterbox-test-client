import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      userName: '',
      text: '',
      texts: [],
      roomId : 1
      // roomId : null
    };
  }

  componentDidMount = () => {
    
  }

  _writeChat = e => { 
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }
  
  _sendChat = async () => { 
    const { userName, text, roomId } = this.state;
    
    await axios.post('post/post', { userName, text, roomId })
      .then(res => { 
        console.log('send chat complete')
      })
      .catch(res => { 
        console.log('sending failed')
      })
  }

  _chatRender = () => { 

  }

  render () { 
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
        <div></div>
      </React.Fragment>
    );
  }
}

export default Post;
