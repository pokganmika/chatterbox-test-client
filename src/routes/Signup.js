import React, { Component, Fragment } from 'react';

import Sign from '../components/Signup/Signup';

class Signup extends Component {
  constructor(props) { 
    super(props);

    this.state = {};
  }

  componentDidMount() {
    
  }

  render() { 
    return (
      <Fragment>
        <h1>회원가입</h1>
        <Sign />
      </Fragment>
    );
  }
}

export default Signup;
