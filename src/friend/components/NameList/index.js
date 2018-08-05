import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import { compose } from 'recompose';
import { connect } from 'react-redux';

// Custom Style
import './NameList.css';

// Custom Components
import ImageArea from '../ImageArea';
import YearButton from '../YearButton';

import { changeYear } from '../../redux';

const enhance = compose(
  connect(
    (state) => state,
    { changeYear }
  )
);

const Namelist = () => {
  return (
    <Fragment>
      <div className="qrbutton-container">
        <Link to="/code/friend">
          <Button color="danger" size="lg">
            Go to QR code
          </Button>
        </Link>
      </div>
      <div className="namelist-container">
        <div className="namelist-header">
          <h2>Friends List</h2>
        </div>
        <Container>
          <Row>
            <YearButton year={1} />
            <YearButton year={2} />
            <YearButton year={3} />
            <YearButton year={4} />
          </Row>
          <Row>
            <Col className="hunted-container">
              <ImageArea />
            </Col>
          </Row>
          <Row>
            <Col className="quote-container">ยังหาใครไม่เจอเหรอ ลองไป Common Room ดูสิ เผื่อจะเจอ~</Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default enhance(Namelist);
