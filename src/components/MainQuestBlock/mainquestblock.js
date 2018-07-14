import React, { Component } from 'react';
import './mqblockstyle.css';
import { Container, Row, Col } from 'reactstrap';

class Mainquestblock extends Component {
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
      <div className="mqblock-container">
        <div className="mqblock-header">
          <h1>Main Quest</h1>
        </div>
        <Container>
          <Row>
            <Col>
              <div className="quest-container">
                <h3>◆ {this.state.quest1}</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="quest-container">
                <h3>◆ {this.state.quest2}</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="quest-container">
                <h3>◆ {this.state.quest3}</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Mainquestblock;
