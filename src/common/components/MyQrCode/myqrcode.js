import React from 'react';

import './MyQRCode.css';

import { Container, Row, Col, Button } from 'reactstrap';
import qrcode from './qrcode_mockup.png';

const MyQRCode = () => {
  return (
    <div className="myqr-container">
      <div className="myqr-header">
        <h3>My QRcode</h3>
      </div>
      <Container className="qrcode-container">
        <Row>
          <Col className="myqrcode-container">
            <img alt="QRCode" src={qrcode} />
          </Col>
        </Row>
        <Row>
          <Col className="scanbutton-container">
            <Button color="warning" size="lg">
              Scan
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyQRCode;
