import React from 'react';
import { Col } from 'reactstrap';

import './ImageBox.css';

const ImageBox = (props) => {
  return (
    <Col xs="6" md="4" lg="3">
      <a href="https://fb.com/wiput.pootong">
        <div className="ImageBox-container">
          <img alt="profile" src="https://graph.facebook.com/2403983979619336/picture?width=250" />
        </div>
        <div className="ImageBox-content">
          <p>
            โจอี้<br />60070090
          </p>
        </div>
      </a>
    </Col>
  );
};

export default ImageBox;
