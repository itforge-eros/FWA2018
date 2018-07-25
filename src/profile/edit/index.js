import React, { Component } from 'react';
// import { Container } from 'reactstrap';
import EditProfile from './components/EditProfile/editprofile.js';

class Home extends Component {
  // Change title
  componentDidMount() {
    document.title = 'Freshy IT 2018 | Edit Profile';
  }

  render() {
    return <EditProfile />;
  }
}

export default Home;
