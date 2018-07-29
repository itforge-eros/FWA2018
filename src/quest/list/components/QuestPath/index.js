import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Lock from './Lock.jpg';
import Pass from './Pass.jpg';

import './QuestPath.css';

const QuestPath = () => {
  return (
    <Container>
      <Row>
        <Col xs="6" md="3">
          <div className="queststatus-container">
            <img alt="Quest" src={Pass} />
          </div>
        </Col>
        <Col xs="6" md="3">
          <div className="queststatus-container">
            <img alt="Quest" src={Pass} />
          </div>
        </Col>
        <Col xs="6" md="3">
          <div className="queststatus-container">
            <img alt="Quest" src={Pass} />
          </div>
        </Col>
        <Col xs="6" md="3">
          <div className="queststatus-container">
            <img alt="Quest" src={Lock} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestPath;
