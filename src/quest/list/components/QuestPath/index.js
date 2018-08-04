import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

import Lock from './Lock.jpg';
import Pass from './Pass.jpg';

import './QuestPath.css';

const QuestPath = (props) => {
  const { pass } = props;
  return (
    <Col xs="6" md="3">
      <div className="queststatus-container">
        <img alt="Quest" src={pass ? Pass : Lock} />
      </div>
    </Col>
  );
};

QuestPath.propTypes = {
  pass: PropTypes.bool
};

export default QuestPath;
