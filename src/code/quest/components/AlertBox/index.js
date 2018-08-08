import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { resetQuestError } from '../../../redux';

import './AlertBox.css';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    { resetQuestError }
  ),
  lifecycle({})
);

const AlertBox = (props) => {
  const {
    code: {
      quest: { error, message }
    },
    resetQuestError
  } = props;

  return (
    <Alert className="alert-box" color={error ? 'danger' : 'success'} toggle={() => resetQuestError()}>
      {message}
    </Alert>
  );
};

AlertBox.propTypes = {
  code: PropTypes.shape({
    friend: PropTypes.shape({
      error: PropTypes.bool,
      message: PropTypes.string
    })
  }),
  resetQuestError: PropTypes.func
};

export default enhance(AlertBox);
