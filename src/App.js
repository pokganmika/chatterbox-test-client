import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import Home from './routes/Home';
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
        <React.Fragment>
          <Route exact path='/' component={Home}/>
          <Route path='/users/login' component={Login}/>
          <Route path='/users/signup' component={Signup}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
