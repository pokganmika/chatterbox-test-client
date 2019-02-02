import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import Home from './routes/Home';
import Login from './routes/Login';
import Signup from './routes/Signup';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          {/* <Route /> */}
        </div>
      </Router>
    );
  }
}

export default App;
