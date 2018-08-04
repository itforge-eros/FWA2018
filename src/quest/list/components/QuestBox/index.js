import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import './QuestBox.css';

class QuestBox extends Component {
  componentDidMount() {}

  render() {
    const { name, expire } = this.props;
    return (
      <Row>
        <Col>
          <div className="main-quest-container">
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
  expire: PropTypes.string
};

export default QuestBox;
