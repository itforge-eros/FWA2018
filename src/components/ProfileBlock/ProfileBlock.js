import React, { Component } from 'react';
import './pfblockstyle.css';
import Profilepics from './profile_icon_withstroke.png';
import { Button, Container, Row, Col } from 'reactstrap';

class Profilemin extends Component {
  constructor(){
    super();
    this.state = {
      score: 10,
      nickname: "Pok",
      firstname: "ศุภกิตติ์",
      lastname: "เธียรธัญญกิจ",
      branch: "เทคโนโลยีสารสนเทศ(ภาคปกติ)",
      };
    }

  render() {
    return (
      <div id="pb-box">
        <div id="pb-header">
          <h1>Profile</h1>
        </div>
        <Container>
          <Row>
            <Col lg="2" md="4" className="profilepicture-container">
              <img src={Profilepics}/>
            </Col>
            <Col lg="10" md="8" className="profileheader-container">
              <h1 id="nickname">{this.state.nickname}</h1>
              <h1 id="fullname">{this.state.firstname} {this.state.lastname}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="block-content-container">
              <h6>รหัสนักศึกษา : {this.props.stu_id}</h6>
              <h6>สาขา : {this.state.branch}</h6>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12" className="profilebutton-container">
              <Button color="danger" size="lg">ล่าได้แล้ว { this.state.score } คน</Button>{' '}
            </Col>
            <Col lg="6" md="12" className="profilebutton-container">
              <Button color="secondary" size="lg">แก้ไขโปรไฟล์</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profilemin;
