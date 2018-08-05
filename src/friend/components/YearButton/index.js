import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col } from 'reactstrap';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { changeYear } from '../../redux';

const enhance = compose(
  connect(
    (state) => state,
    { changeYear }
  )
);

const YearButton = (props) => {
  const {
    changeYear,
    year,
    friends: { selectYear }
  } = props;

  return (
    <Col xs="3" className="yearbutton-container">
      <Button color={year === selectYear ? 'success' : 'info'} onClick={() => changeYear(year)}>
        ปี {year}
      </Button>
    </Col>
  );
};

YearButton.propTypes = {
  changeYear: PropTypes.func,
  year: PropTypes.number,
  friends: PropTypes.shape({
    selectYear: PropTypes.number
  })
};

export default enhance(YearButton);
