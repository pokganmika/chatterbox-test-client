import React, { Component } from 'react';
import axios from 'axios';

import Room from '../components/Home/Room';
import Post from '../components/Home/Post';

class Home extends Component {
  constructor(props) { 
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    const { data } = await axios.get('post');
    // const { data } = await axios.get('users/index')
    console.log('얘가 데타 : ', data);
      // .then(res => { 
      //   console.log('----이것이 다타',res)

      // })
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
