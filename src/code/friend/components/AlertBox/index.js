import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { resetError } from '../../../redux';

import './AlertBox.css';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    { resetError }
  ),
  lifecycle({})
);

const AlertBox = (props) => {
  const {
    code: { error, message },
    resetError
  } = props;

  return (
    <Alert className="alert-box" color={error ? 'danger' : 'success'} toggle={() => resetError()}>
      {message}
    </Alert>
  );
};

AlertBox.propTypes = {
  code: PropTypes.shape({
    error: PropTypes.bool,
    message: PropTypes.string
  }),
  resetError: PropTypes.func
};

export default enhance(AlertBox);
