import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/Header';
import Home from './routes/Home';
import Chat from './routes/Chat';
import Login from './routes/Login';
import Signup from './routes/Signup';

class App extends Component {
  constructor(props) { 
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <>
          <Header/>
          {/* Route를 사용할 경우 props를 내리는 방법 but 문제가 생길 수도 있다!!*/}
          {/* <Route exact path='/' component={() => <Home username={this.state.username}/>}/> */}
          <Route exact path='/' component={Home} />
          <Route path='/post' component={Chat} />
          <Route path='/users/login' component={Login}/>
          <Route path='/users/signup' component={Signup}/>
        </>
      </Router>
    );
  }
}

export default App;
