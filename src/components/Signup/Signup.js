import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      usersId: '',
      password: '',
      signComplete: false
    };
  }

  componentDidMount() {
    
  }

  _writeAccount = e => { 
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  _registerAccount = async () => { 
    const { usersId, password } = this.state;

    await axios.post('/users/signup', { usersId, password })
      .then(res => { 
        console.log('[+] 유저 가입 성공');
        // history를 사용하여 유저를 가입시킴?
        // history는 외부에서 받아 import해서 사용할 수도 있고
        // 만들어 사용도 가능??
        // redirect

        //-----
        // res.data === '가입 완료' && this.props.history.push('/users/login')
        // console.log('이것이 다타 : ',res.data)
        // console.log('이것이 다타 : ',this.props.history)
        //------
        this.setState({
          signComplete: true
        })
      })
      .catch(err => { 
        console.log('[-] 유저 가입 실패')
      })
  }

  render () { 
    if (this.state.signComplete === true) { 
      return <Redirect to='/users/login' />
    }

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
          type='password'
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
