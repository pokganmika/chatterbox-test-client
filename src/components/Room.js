import React, { Component } from 'react';
// import axios from 'axios';

class Room extends Component {
  constructor(props) { 
    super(props);

    this.state = {};
  }

  componentDidMount() {
    
  }

  _callApi () {
    // axios.post('room/room', )
  }

  render() { 
    return ( 
      <React.Fragment>
        <input
          type="text"
          placeholder='roomname'
        />
        <input
          type="submit"
          value="Room Select"
        />
      </React.Fragment>
    );
  }
}

export default Room;
