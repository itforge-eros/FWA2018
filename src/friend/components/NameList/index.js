import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import { compose } from 'recompose';
import { connect } from 'react-redux';

// Custom Style
import './NameList.css';

// Custom Components
import ImageArea from '../ImageArea';
import YearButton from '../YearButton';

import { changeYear, setTotal } from '../../redux';

const enhance = compose(
  connect(
    (state) => state,
    { changeYear, setTotal }
  )
);

const Namelist = (props) => {
  const {
    friends: { loading, total },
    setTotal
  } = props;

  if (typeof total[0] === 'undefined') {
    setTotal({
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0
    });
  }

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
            <YearButton year={0} />
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
            {loading ? (
              ''
            ) : (
              <Col className="counter-container">
                ทั้งหมด {total[0]} คน ปี 1: {total[1]} คน, ปี 2: {total[2]} คน, ปี 3: {total[3]} คน, ปี 4: {total[4]} คน
              </Col>
            )}
          </Row>
          <Row>
            <Col className="quote-container">ยังหาใครไม่เจอเหรอ ลองไป Common Room ดูสิ เผื่อจะเจอ~</Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

Namelist.propTypes = {
  friends: PropTypes.shape({
    loading: PropTypes.bool,
    total: PropTypes.object
  }),
  setTotal: PropTypes.object
};

export default enhance(Namelist);
