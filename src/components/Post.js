import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      userName: null,
      text: null,
      roomId : null
    };
  }

  componentDidMount = () => {
    
  }

  _writeChat = e => { 

  }
  
  _sendChat = async () => { 
    const { userName, text, roomId } = this.state;

    await axios.post('post/post', { userName, text, roomId })
      .then(res => { 
        console.log('send chat complete')
      })
  }

  render() { 
    return (
      <React.Fragment>
        <input type='text' placeholder='username'/>
        <input type='text' placeholder='text'/>
        <input type='text' placeholder='roomname'/>
        <input type='submit' value="Submit" onClick={this._sendChat} />
        <div></div>
      </React.Fragment>
    );
  }
}

export default Post;
