import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import './QuestBox.css';

class QuestBox extends Component {
  componentDidMount() {}

  render() {
    const { name, expire, pass } = this.props;
    return (
      <Row>
        <Col>
          <div className={`main-quest-container ${pass ? 'quest-green' : ''}`}>
            <div className="quest-detail">
              <h4>◆ {name}</h4>
            </div>
            <div className="quest-expire">
              <p>{expire}</p>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

QuestBox.propTypes = {
  name: PropTypes.string,
  expire: PropTypes.string,
  pass: PropTypes.bool
};

export default QuestBox;
