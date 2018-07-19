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
          <h3>Main Quest</h3>
        </div>
        <Container>
          <Row>
            <Col>
              <div className="quest-container">
                <h4>◆ {this.state.quest1}</h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="quest-container">
                <h4>◆ {this.state.quest2}</h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="quest-container">
                <h4>◆ {this.state.quest3}</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Mainquestblock;
