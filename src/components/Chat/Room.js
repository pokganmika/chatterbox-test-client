import React, { Component } from 'react';
import axios from 'axios';
// import styled from 'styled-components';

import RoomCard from '../Common/RoomCard';

class Room extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      roomName: '',
      rooms: []
    };
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/room')

    this.setState({
      rooms: data
    })
    // console.log('Room => this.state.rooms : ', this.state.rooms)
  }

  // _writeRoom = e => { 
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  _createRoom = async () => { 
    const { roomName } = this.state;
    await axios.post('/api/room', { roomName })
      .then(async res => { 
        console.log('success room create')
      })
      
      .catch(err => { 
        console.log('fail room create')
      })
  }

  _roomRender = () => { 
    const { rooms } = this.state;
    return (
      rooms.reverse().map(room => { 
        return (
          <RoomList
            room={room.roomName}
          />
        );
      })
    );
  }

  render () { 
    const { rooms } = this.state;
    return ( 
      <React.Fragment>
        <input
          type="text"
          placeholder='roomname'
          name={'roomName'}
          value={this.state.roomName}
          onChange={this.props._writeRoom}
        />
        <input
          type="submit"
          value="Room Create"
          onClick={this._createRoom}
        />
        {rooms.length !== 0 ? this._roomRender() : 'Loading'}
      </React.Fragment>
    );
  }
}

const RoomList = ({ room }) => { 
  return (
    <RoomCard 
      room={room}

    />
  );
}

export default Room;
