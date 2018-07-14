import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import Huntedpic from './mockup-profilepic.jpg';

import './Imagebox.css';

class Imagebox extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="4">
            <div className="huntedpic-container">
              <img src={ Huntedpic }/>
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img src={ Huntedpic }/>
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img src={ Huntedpic }/>
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <div className="huntedpic-container">
              <img src={ Huntedpic }/>
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img src={ Huntedpic }/>
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img src={ Huntedpic }/>
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <div className="huntedpic-container">
              <img src={ Huntedpic }/>
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img src={ Huntedpic }/>
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img src={ Huntedpic }/>
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <div className="huntedpic-container">
              <img src={ Huntedpic }/>
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img src={ Huntedpic }/>
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img src={ Huntedpic }/>
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Imagebox;
