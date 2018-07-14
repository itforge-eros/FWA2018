import React, { Component } from 'react';
import './queststyle.css';
import { Container, Row, Col, Button } from 'reactstrap';

class Quests extends Component {
  constructor(){
    super();
    this.state = {
      quest1: "หาแมว",
      quest2: "หาหมา",
      quest3: "หาหนู"
      };
    }

  render() {
    return (
      <div>
        <div className="questmain-container">
          <div className="questmain-header">
            <h1>Quests</h1>
          </div>
          <div className="questpath-container">
            <h5>hi</h5>
          </div>
          <Container className="quests-container">
          <Row>
            <Col>
              <div className="main-quest-container">
                <div classname="quest-detail">
                  <h4>◆ {this.state.quest1}</h4>
                </div>
                <div className="quest-expire">
                  <p>P'Joey Expire : 18/06/18</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="main-quest-container">
                <div classname="quest-detail">
                  <h4>◆ {this.state.quest2}</h4>
                </div>
                <div className="quest-expire">
                  <p>P'Joey Expire : 18/06/18</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="main-quest-container">
                <div classname="quest-detail">
                  <h4>◆ {this.state.quest3}</h4>
                </div>
                <div className="quest-expire">
                  <p>P'Joey Expire : 18/06/18</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
        <div className="questbtn-container">
          <Button color="warning" size="lg">ล่ารายชื่อ</Button>
        </div>
      </div>
    );
  }
}

export default Quests;
