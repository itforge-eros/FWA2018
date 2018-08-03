import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';
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
  const {
    code: { error, message }
  } = props;

  return (
    <UncontrolledAlert className="alert-box" color={error ? 'danger' : 'success'}>
      {message}
    </UncontrolledAlert>
  );
};

AlertBox.propTypes = {
  code: PropTypes.shape({
    error: PropTypes.bool,
    message: PropTypes.string
  })
};

export default enhance(AlertBox);
