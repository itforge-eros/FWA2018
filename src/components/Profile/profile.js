import React, { Component } from 'react';
import './pfmainstyle.css';
import Profilepics from './profile_icon_withstroke.png';
import { Button, Container, Row, Col } from 'reactstrap';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      score: 10,
      nickname: 'Pok',
      firstname: 'ศุภกิตติ์',
      lastname: 'เธียรธัญญกิจ',
      branch: 'วิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจ',
      introduce:
        'การที่เราจะประสบความสำเร็จไม่ได้แปลว่า เราจะประสบความสำเร็จ และการที่เราเอาชนะความกลัว ไม่ได้แปลว่าเรากล้าขึ้น',
      mainquest: '12',
      subquest: '2'
    };
  }

  render() {
    return (
      <div className="profilemain-container">
        <div className="profilemain-header">
          <h1>Profile</h1>
        </div>
        <Container>
          <Row>
            <Col lg="2" md="4" className="profilepicture-header">
              <img src={Profilepics} />
            </Col>
            <Col lg="10" md="8" className="profileheader-container">
              <h1 id="nickname-main">{this.state.nickname}</h1>
              <h1 id="fullname-main">
                {this.state.firstname} {this.state.lastname}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="content-container">
              <h6>รหัสนักศึกษา : {this.props.stu_id}</h6>
              <h6>สาขา : {this.state.branch}</h6>
              <h6>แนะนำตัวสั้นๆกันหน่อย! :</h6>
              <h6 id="intro">" {this.state.introduce} "</h6>
            </Col>
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
                  <h2 id="number-pass">{this.state.mainquest}</h2>
                </Col>
                <Col className="quest-status2">
                  <h4>พิเศษ</h4>
                  <h2 id="number-pass">{this.state.subquest}</h2>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="btn-container">
              <Button color="secondary" size="lg">
                แก้ไขโปรไฟล์
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
