import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { firestore } from '../../../firebase';

import { Container, Row, Col } from 'reactstrap';

import QRCode from 'qrcode.react';

import './QuestQRCode.css';

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
      match: {
        params: { id }
      }
    } = this.props;

    let { random } = this.state;

    return (
      <div className="myqr-container">
        <div className="myqr-header">
          <h3>Quest QRCode</h3>
        </div>
        <Container className="qrcode-container">
          <Row>
            <Col className="myqrcode-container">
              {random === '' ? (
                <p className="qrcode-description">Loading...</p>
              ) : (
                <QRCode value={`https://freshy.itforge.io/code/qadd/${random}${id}`} size={200} />
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
    );
  }
}

MyQRCode.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default enhance(MyQRCode);
