import React, { Component } from 'react';
import './questpathstyle.css';
import { Container, Row, Col } from 'reactstrap';
import Lockquest from './lockquest_icon.jpg';
import Passquest from './passquest_icon.jpg';

class Questpath extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col xs="4">
            <div className="queststatus-container">
              <img src={ Passquest }/>
            </div>
          </Col>
          <Col xs="4">
            <div className="queststatus-container">
              <img src={ Passquest }/>
            </div>
          </Col>
          <Col xs="4">
            <div className="queststatus-container">
              <img src={ Passquest }/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <div className="queststatus-container">
              <img src={ Lockquest }/>
            </div>
          </Col>
          <Col xs="4">
            <div className="queststatus-container">
              <img src={ Lockquest }/>
            </div>
          </Col>
          <Col xs="4">
            <div className="queststatus-container">
              <img src={ Lockquest }/>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Questpath;
