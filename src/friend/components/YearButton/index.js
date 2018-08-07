import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col } from 'reactstrap';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { changeYear, getFriends } from '../../redux';

const enhance = compose(
  connect(
    (state) => state,
    { changeYear, getFriends }
  )
);

const YearButton = (props) => {
  const {
    changeYear,
    getFriends,
    year,
    friends: { selectYear },
    user: {
      user: { uid }
    }
  } = props;

  const yearChange = (year) => {
    changeYear(year);
    getFriends(uid);
  };

  return (
    <Col xs={year === 0 ? 4 : 2} className="yearbutton-container">
      <Button color={year === selectYear ? 'success' : 'info'} onClick={() => yearChange(year)}>
        {year === 0 ? 'ทั้งหมด' : `ปี ${year}`}
      </Button>
    </Col>
  );
};

YearButton.propTypes = {
  changeYear: PropTypes.func,
  getFriends: PropTypes.func,
  year: PropTypes.number,
  friends: PropTypes.shape({
    selectYear: PropTypes.number
  }),
  user: PropTypes.shape({
    user: PropTypes.shape({
      uid: PropTypes.string
    })
  })
};

export default enhance(YearButton);
