import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
        <DivLogin>
          <Link to='users/login'>Log in</Link>
          <Link to='users/signup'>Sign up</Link> 
        </DivLogin>
        <Room /><br />
        <Post />
      </React.Fragment>  
    );
  }
}

const DivLogin = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Home;
