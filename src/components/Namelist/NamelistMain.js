import React , { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import './namelist.css'
import Imagebox from '../ImageBox/ImageBox';

class Namelist extends Component {
  render() {
    return (
      <div>
        <div className="qrbutton-container">
              <Button color="danger" size="lg">Go to QR code</Button>
        </div>
        <div className="namelist-container">
          <div className="namelist-header">
            <h1>Name list</h1>
          </div>
          <Container>
            <Row>
              <Col xs="3" className="yearbutton-container1">
                <Button color="warning">ปี 1</Button>
              </Col>
              <Col xs="3" className="yearbutton-container2">
                <Button color="warning">ปี 2</Button>
              </Col>
              <Col xs="3" className="yearbutton-container3">
                <Button color="warning">ปี 3</Button>
              </Col>
              <Col xs="3" className="yearbutton-container4">
                <Button color="warning">ปี 4</Button>
              </Col>
            </Row>
            <Row>
              <Col className="hunted-container">
                <Imagebox />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Namelist;