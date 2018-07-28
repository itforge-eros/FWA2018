import React, { Fragment } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

import './NameList.css';
import ImageArea from '../ImageArea';

const Namelist = () => {
  return (
    <Fragment>
      <div className="namelist-container">
        <div className="namelist-header">
          <h2>Friends List</h2>
        </div>
        <Container>
          <Row>
            <Col xs="3" className="yearbutton-container">
              <Button color="warning">ปี 1</Button>
            </Col>
            <Col xs="3" className="yearbutton-container">
              <Button color="warning">ปี 2</Button>
            </Col>
            <Col xs="3" className="yearbutton-container">
              <Button color="warning">ปี 3</Button>
            </Col>
            <Col xs="3" className="yearbutton-container">
              <Button color="warning">ปี 4</Button>
            </Col>
          </Row>
          <Row>
            <Col className="hunted-container">
              <ImageArea />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="qrbutton-container">
        <Button color="danger" size="lg">
          Go to QR code
        </Button>
      </div>
    </Fragment>
  );
};

export default Namelist;
