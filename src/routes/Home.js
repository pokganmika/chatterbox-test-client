import React, { Component } from 'react';
import Room from '../components/Room';
import Post from '../components/Post';

class Home extends Component {
  constructor(props) { 
    super(props);

    this.state = {};
  }

  render() { 
    return (
      <React.Fragment>
        <h1>Chatter Box</h1>
        <Room /><br />
        <Post />
      </React.Fragment>  
    );
  }
}

export default Home;