import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './AlertBox.css';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    {}
  ),
  lifecycle({})
);

const AlertBox = (props) => {
  const { message, error, reset } = props;

  return (
    <Alert className="alert-box" color={error ? 'danger' : 'success'} toggle={() => reset()}>
      {message}
    </Alert>
  );
};

AlertBox.propTypes = {
  error: PropTypes.bool,
  message: PropTypes.string,
  reset: PropTypes.func
};

export default enhance(AlertBox);
