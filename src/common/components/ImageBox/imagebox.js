import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Huntedpic from './mockup-profilepic.jpg';

import './imageboxstyle.css';

class Imagebox extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="4">
            <div className="huntedpic-container">
              <img alt="Image2" src={Huntedpic} />
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img alt="Image3" src={Huntedpic} />
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img alt="Image4" src={Huntedpic} />
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <div className="huntedpic-container">
              <img alt="Image5" src={Huntedpic} />
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img alt="Image6" src={Huntedpic} />
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img alt="Image2" src={Huntedpic} />
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <div className="huntedpic-container">
              <img alt="Image7" src={Huntedpic} />
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img alt="Image8" src={Huntedpic} />
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img alt="Image9" src={Huntedpic} />
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <div className="huntedpic-container">
              <img alt="Image10" src={Huntedpic} />
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img alt="Image11" src={Huntedpic} />
            </div>
            <div className="huntedid-container">
              <p>60070121</p>
            </div>
          </Col>
          <Col xs="4">
            <div className="huntedpic-container">
              <img alt="Image12" src={Huntedpic} />
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
