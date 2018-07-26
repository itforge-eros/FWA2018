import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Profile.css';

import DefaultPhoto from './default.png';

const MyProfile = () => (
  <div className="profilemain-container">
    <div className="profilemain-header">
      <h1>My Profile</h1>
    </div>
    <Container>
      <Row>
        <Col lg="2" md="4" className="profilepicture-header">
          <img alt="Profile" src={DefaultPhoto} />
        </Col>
        <Col lg="10" md="8" className="profileheader-container">
          <h1 id="nickname-main" />
          <h1 id="fullname-main" />
          <h6>รหัสนักศึกษา : </h6>
          <h6>สาขา : </h6>
          <h6>แนะนำตัวสั้นๆกันหน่อย! :</h6>
          <h6 id="intro" />
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
              <h2 id="number-pass" />
            </Col>
            <Col className="quest-status2">
              <h4>พิเศษ</h4>
              <h2 id="number-pass" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="btn-container">
          <Link to="/profile/edit">
            <Button color="secondary" size="lg">
              แก้ไขโปรไฟล์
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
);

export default MyProfile;