import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) { 
    super(props);

    this.state = {};
  }

  render() { 
    return (
      <React.Fragment>
        <input type='text' placeholder='id'/><br/>
        <input type='text' placeholder='password'/><br/>
        <input type='submit' value='Sign up'/>
      </React.Fragment>
    );
  }
}
 
export default Signup;
