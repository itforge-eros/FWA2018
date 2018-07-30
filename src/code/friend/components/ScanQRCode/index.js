import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import QRReader from 'react-qr-reader';

import './ScanQRCode.css';

const enhance = compose(
  connect(
    (state) => state,
    {}
  ),
  lifecycle({
    conponentDidMount() {}
  })
);

const ScanQRCode = () => {
  return (
    <div className="myqr-container">
      <div className="myqr-header">
        <h3>QRCode Scanner</h3>
      </div>
      <Container className="qrcode-container">
        <Row>
          <Col className="myqrcode-container">
            <QRReader delay={300} style={{ width: '100%' }} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="qrcode-description">ใช้สำหรับกิจกรรมล่ารายชื่อ</p>
          </Col>
        </Row>
        <Row>
          <Col className="scanbutton-container">
            <Link to="/code/friend">
              <Button color="success" size="lg">
                My QRCode
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default enhance(ScanQRCode);
