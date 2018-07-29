import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import QuestPath from '../QuestPath/';

import './QuestList.css';

class Quests extends Component {
  constructor() {
    super();
    this.state = {
      quest1: 'หาแมว',
      quest2: 'หาหมา',
      quest3: 'หาหนู'
    };
  }

  render() {
    return (
      <Fragment>
        <div className="questmain-container">
          <div className="questmain-header">
            <h1>Quests</h1>
          </div>
          <div className="questpath-container">
            <QuestPath />
          </div>
          <Container className="quests-container">
            <Row>
              <Col>
                <div className="main-quest-container">
                  <div className="quest-detail">
                    <h4>◆ {this.state.quest1}</h4>
                  </div>
                  <div className="quest-expire">
                    <p>18/06/18</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="main-quest-container">
                  <div className="quest-detail">
                    <h4>◆ {this.state.quest2}</h4>
                  </div>
                  <div className="quest-expire">
                    <p>18/06/18</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="main-quest-container">
                  <div className="quest-detail">
                    <h4>◆ {this.state.quest3}</h4>
                  </div>
                  <div className="quest-expire">
                    <p>18/06/18</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="questqr-container">
          <Button color="success" size="lg">
            เช็คชื่อเควส
          </Button>
        </div>
        <div className="questbtn-container">
          <Button color="warning" size="lg">
            ล่ารายชื่อ
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default Quests;
