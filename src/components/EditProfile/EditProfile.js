import React , { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './editpfstyle.css'

class Editprofile extends Component {
  render() {
    return (
      <div className="news-container">
        <div className="news-header">
          <h1>News</h1>
        </div>
        <div className="newspic-container">
          <img src={Newspic}/>
        </div>
      </div>
    );
  }
}

export default Editprofile;