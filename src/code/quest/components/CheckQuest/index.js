import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Button } from 'reactstrap';

import AlertBox from '../AlertBox';

import { addFriend } from '../../../redux';

import './CheckQuest.css';

const enhance = compose(
  connect(
    (state) => state,
    { addFriend }
  )
);
class AddFriend extends Component {
  state = {};

  componentDidMount() {
    const {
      user: {
        user: { uid }
      },
      match: {
        params: { id }
      }
    } = this.props;

    this.props.addFriend(id, uid);
  }

  render() {
    const {
      code: {
        friend: { message }
      }
    } = this.props;

    return (
      <div className="myqr-container">
        <div className="myqr-header">
          <h3>Quest Check-in</h3>
        </div>
        <Container className="qrcode-container">
          <Row>
            <Col className="qrcode-container">{message ? <AlertBox /> : 'Checking-in~'}</Col>
          </Row>
          <Row>
            <Col>
              <p className="qrcode-description">ใช้สำหรับเช็คชื่อเควส</p>
            </Col>
          </Row>
          <Row>
            <Col className="scanbutton-container">
              <Link to="/quest/list">
                <Button color="info" size="lg">
                  Quests List
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

AddFriend.propTypes = {
  user: PropTypes.shape({
    user: PropTypes.shape({
      uid: PropTypes.string
    })
  }),
  code: PropTypes.shape({
    friend: PropTypes.shape({
      message: PropTypes.string
    })
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  addFriend: PropTypes.func
};

export default enhance(AddFriend);
