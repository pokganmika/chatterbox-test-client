import React, { Component } from 'react';
// import axios from 'axios';

class Home extends Component {
  constructor(props) { 
    super(props);

    this.state = {};
  }

  // async componentDidMount() {
  //   const { data } = await axios.get('/api/post');
  //   // const { data } = await axios.get('/api/users/index')
  //   console.log('얘가 데타 : ', data);
  //     // .then(res => { 
  //     //   console.log('----이것이 다타',res)

  //     // })
  // }

  render() { 
    return (
      <React.Fragment>
        <h1>Chatter Box</h1>
        <img src='https://pilbox.themuse.com/image.jpg?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fattachments%2F20883.jpg%3Fv%3D63468a40704a57e39eccca67c4649865ab0aafc20c3e9d7867ed4d9d32194106&h=367&prog=1' />
      </React.Fragment>  
    );
  }
}

export default Home;
