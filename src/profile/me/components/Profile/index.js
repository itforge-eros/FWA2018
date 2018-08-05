import React from 'react';
import { Row, Col, Container } from 'reactstrap';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Profile.css';

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);

const MyProfile = (props) => {
  const {
    profile: {
      info: { nickname, prefix, firstname, lastname, student_id, branch, introduction },
      photoURL
    }
  } = props;
  return (
    <div className="profilemain-container">
      <div className="profilemain-header">
        <h1>My Profile</h1>
      </div>
      <Container>
        <Row>
          <Col lg="2" md="4" className="profilepicture-header">
            <img alt="Profile" src={`${photoURL}?width=100`} />
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
        <Row>
          <Col className="content-container" />
        </Row>
        <Row>
          <Col className="mission-box">
            <Row>
              <Col className="mission-head">
                <h2>เควสที่เสร็จแล้ว</h2>
              </Col>
            </Row>
            <Row>
              <Col className="quest-status1">
                <h4>หลัก</h4>
                <h2 id="number-pass">0</h2>
              </Col>
              <Col className="quest-status2">
                <h4>พิเศษ</h4>
                <h2 id="number-pass">0</h2>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row>
          <Col className="btn-container">
            <Link to="/profile/edit">
              <Button color="secondary" size="lg">
                <FontAwesomeIcon icon="edit" /> แก้ไขโปรไฟล์
              </Button>
            </Link>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

MyProfile.propTypes = {
  setForm: PropTypes.func,
  setFormDefault: PropTypes.func,
  profile: PropTypes.shape({
    form: PropTypes.shape({
      nickname: PropTypes.string,
      prefix: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      student_id: PropTypes.string,
      branch: PropTypes.string,
      introduction: PropTypes.string
    }),
    photoURL: PropTypes.string
  })
};

export default enhance(MyProfile);
