import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { firestore } from '../../../../firebase';

import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';

import './MyQRCode.css';

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);
class MyQRCode extends Component {
  state = {
    random: ''
  };

  componentDidMount() {
    this.random = firestore
      .collection('config')
      .doc('random')
      .onSnapshot((doc) => {
        this.setState({ random: doc.data().value });
      });
  }

  componentWillUnmount() {
    this.random();
  }

  render() {
    const {
      user: {
        user: { uid }
      }
    } = this.props;

    let { random } = this.state;

    return (
      <div className="myqr-container">
        <div className="myqr-header">
          <h3>My QRCode</h3>
        </div>
        <Container className="qrcode-container">
          <Row>
            <Col className="myqrcode-container">
              {random === '' ? (
                <p className="qrcode-description">Loading...</p>
              ) : (
                <QRCode value={`${random}${uid}`} size={200} />
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
              <Link to="/code/fscan">
                <Button color="warning" size="lg">
                  Scan
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

MyQRCode.propTypes = {
  user: PropTypes.shape({
    user: PropTypes.shape({
      uid: PropTypes.string
    })
  })
};

export default enhance(MyQRCode);
