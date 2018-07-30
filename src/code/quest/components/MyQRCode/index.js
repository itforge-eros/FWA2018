import React from 'react';

import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';

import './MyQRCode.css';

const MyQRCode = () => {
  return (
    <div className="myqr-container">
      <div className="myqr-header">
        <h3>My QRCode</h3>
      </div>
      <Container className="qrcode-container">
        <Row>
          <Col className="myqrcode-container">
            <QRCode value="hello" size={200} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="qrcode-description">ใช้สำหรับเช็คชื่อเควส</p>
          </Col>
        </Row>
        <Row>
          <Col className="scanbutton-container">
            <Link to="/code/qscan">
              <Button color="warning" size="lg">
                Scan
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyQRCode;
