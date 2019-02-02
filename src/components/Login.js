import React, { Component } from 'react';

class Login extends Component {
  constructor(props) { 
    super(props);

    this.state = {};
  }
  
  render() { 
    return (
      <React.Fragment>
        <input type='text' placeholder='id' /><br/>
        <input type='text' placeholder='password' /><br/>
        <input type='submit' value='Log in' />
      </React.Fragment>
    );
  }
}

export default Login;
