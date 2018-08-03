import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import QRReader from 'react-qr-reader';

import { addFriend } from '../../../redux';

import AlertBox from '../AlertBox';

import './ScanQRCode.css';

const enhance = compose(
  connect(
    (state) => state,
    { addFriend }
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
    addFriend
  } = props;

  const handleScan = (data) => {
    if (data) {
      addFriend(data, uid);
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
                <div className="AppLoader">Adding Friend</div>
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
  addFriend: PropTypes.func
};

export default enhance(ScanQRCode);
