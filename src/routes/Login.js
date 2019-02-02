import React, { Component, Fragment } from 'react';

import Log from '../components/Login';

class Login extends Component {
  constructor(props) { 
    super(props);

    this.state = {};
  }

  componentDidMount() {
    
  }

  render() { 
    return (
      <Fragment>
        <h1>로그인</h1>
        <Log />
      </Fragment>
    );
  }
}

export default Login;
