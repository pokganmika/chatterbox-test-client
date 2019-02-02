import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      usersId: '',
      password: ''
    };
  }

  componentDidMount() {
    
  }

  _writeAccount = e => { 
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  _registerAccount = async () => { 
    const { usersId, password } = this.state;

    await axios.post('users/signup', { usersId, password })
      .then(res => { 
        console.log('[+] 유저 가입 성공')
      })
      .catch(res => { 
        console.log('[-] 유저 가입 실패')
      })
  }

  render() { 
    return (
      <React.Fragment>
        <input
          type='text'
          placeholder='id'
          name={'usersId'}
          value={this.state.usersId}
          onChange={this._writeAccount}
        /><br />
        <input
          type='text'
          placeholder='password'
          name={'password'}
          value={this.state.password}
          onChange={this._writeAccount}
        /><br />
        {/* <input type='text' placeholder='password' /><br /> */}
        {/* 패스워드 타당성 검사 필요 */}
        <input
          type='submit'
          value='Sign up'
          onClick={this._registerAccount}
        />
      </React.Fragment>
    );
  }
}

export default Signup;
