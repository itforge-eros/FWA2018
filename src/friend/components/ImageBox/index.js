import React from 'react';
import { Col } from 'reactstrap';

import './ImageBox.css';

const ImageBox = (props) => {
  return (
    <Col xs="4">
      <a href="https://fb.com/wiput.pootong">
        <div className="huntedpic-container">
          <img alt="Image2" src="https://graph.facebook.com/2403983979619336/picture?width=500" />
        </div>
        <div className="huntedid-container">
          <p>60070090</p>
        </div>
      </a>
    </Col>
  );
};

export default ImageBox;
