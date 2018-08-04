import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { Container, Row, Col } from 'reactstrap';
import AlertBox from '../AlertBox';

import { addFriend } from '../../../redux';

import './AddFriend.css';

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
          <h3>Add Friend</h3>
        </div>
        <Container className="qrcode-container">
          <Row>{message ? <AlertBox /> : 'Adding~'}</Row>
          <Row>
            <Col>
              <p className="qrcode-description">ใช้สำหรับกิจกรรมล่ารายชื่อ</p>
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
