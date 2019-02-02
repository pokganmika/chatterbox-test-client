import React, { Component } from 'react';

import Room from '../components/Home/Room';
import Post from '../components/Home/Post';

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
