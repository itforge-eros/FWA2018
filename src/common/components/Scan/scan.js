import React, { Component } from 'react';
import './scanstyle.css';
import { Container, Row, Col, Button } from 'reactstrap';

class Scan extends Component {
  render() {
    return (
      <div>
        <div className="scanqr-container">
          <div className="scanqr-header">
            <h1>Scan</h1>
          </div>
          <Container className="qrcodescan-container">
            <Row>
              <Col className="myqrbutton-container">
                <Button color="danger">My QR Code</Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="entercode-container">
          <Button color="warning" size="lg">
            Enter code
          </Button>
        </div>
      </div>
    );
  }
}

export default Scan;
