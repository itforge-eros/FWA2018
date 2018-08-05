import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { Container, Row, Col } from 'reactstrap';

import QRReader from 'react-qr-reader';

import { checkinQuest } from '../../../redux';

import AlertBox from '../AlertBox';

import './ScanQRCode.css';

const enhance = compose(
  connect(
    (state) => state,
    { checkinQuest }
  ),
  lifecycle({
    conponentDidMount() {}
  })
);

const ScanQRCode = (props) => {
  const {
    user: {
      user: { uid }
    },
    code: {
      loading,
      friend: { message }
    },
    checkinQuest
  } = props;

  const handleScan = (data) => {
    if (data) {
      checkinQuest(data, uid);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <Fragment>
      {message ? <AlertBox /> : ''}
      <div className="myqr-container">
        <div className="myqr-header">
          <h3>QRCode Scanner</h3>
        </div>
        <Container className="qrcode-container">
          <Row>
            <Col className="myqrcode-container">
              {loading ? (
                <div className="AppLoader">Checking-in Quest</div>
              ) : (
                <QRReader
                  delay={300}
                  style={{ width: '100%', maxWidth: '600px' }}
                  onScan={handleScan}
                  onError={handleError}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="qrcode-description">ใช้สำหรับเช็คชื่อเควส</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

ScanQRCode.propTypes = {
  user: PropTypes.shape({
    user: PropTypes.shape({
      uid: PropTypes.string
    })
  }),
  code: PropTypes.shape({
    loading: PropTypes.bool
  }),
  checkinQuest: PropTypes.func
};

export default enhance(ScanQRCode);
