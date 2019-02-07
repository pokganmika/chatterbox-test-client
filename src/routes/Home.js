import React, { Component } from 'react';
// import axios from 'axios';

class Home extends Component {
  constructor(props) { 
    super(props);

    this.state = {};
  }

  // async componentDidMount() {
  //   const { data } = await axios.get('/post');
  //   // const { data } = await axios.get('users/index')
  //   console.log('얘가 데타 : ', data);
  //     // .then(res => { 
  //     //   console.log('----이것이 다타',res)

  //     // })
  // }

  render() { 
    return (
      <React.Fragment>
        <h1>Chatter Box</h1>
      </React.Fragment>  
    );
  }
}

export default Home;
