import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      usersId: '',
      password: ''
    };
  }
  
  componentDidMount() {
    
  }



  render() { 
    return (
      <React.Fragment>
        <input type='text' placeholder='id' /><br/>
        <input type='text' placeholder='password' /><br/>
        <input type='submit' value='Log in' /><br/>
        아직 회원이 아니면
        <Link to='/users/signup'>회원가입</Link>
        을 해주세요
      </React.Fragment>
    );
  }
}

export default Login;
