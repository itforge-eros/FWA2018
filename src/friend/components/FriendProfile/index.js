import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { firestore } from '../../../firebase';

import './FriendProfile.css';

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);

class FriendProfile extends Component {
  state = {
    profile: {
      info: {
        nickname: '',
        prefix: '',
        firstname: '',
        lastname: '',
        student_id: '',
        branch: '',
        introduction: ''
      }
    },
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    firestore
      .collection('profile')
      .doc(this.props.match.params.id)
      .get()
      .then((doc) => {
        this.setState({ profile: doc.data(), loading: false });
      });
  }

  render() {
    const {
      profile: {
        info: { nickname, prefix, firstname, lastname, student_id, branch, introduction },
        photoURL
      },
      loading
    } = this.state;
    return (
      <div className="profilemain-container">
        <div className="profilemain-header">
          <h1>Friend Profile</h1>
        </div>
        <Container>
          {loading ? (
            <div className="FriendProfile-Loading">Loading...</div>
          ) : (
            <Row>
              <Col lg="2" md="4">
                <img alt="Profile" className="profilepicture-header" src={`${photoURL}?width=250`} />
              </Col>
              <Col lg="10" md="8" className="profileheader-container">
                <h1 id="nickname-main">{nickname}</h1>
                <h1 id="fullname-main">
                  {prefix} {firstname} {lastname}
                </h1>
                <h6 className="profile-content">
                  <b>รหัสนักศึกษา</b> : {student_id}
                </h6>
                <h6 className="profile-content">
                  <b>สาขา</b> : {branch}
                </h6>
                <h6 className="profile-content">
                  <b>แนะนำตัวสั้นๆกันหน่อย!</b> :
                </h6>
                <h6 id="intro">{introduction}</h6>
              </Col>
            </Row>
          )}
          <Row>
            <Col className="content-container" />
          </Row>
        </Container>
      </div>
    );
  }
}

FriendProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default enhance(FriendProfile);
