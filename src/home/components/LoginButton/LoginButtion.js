import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { setLogin, setLogout } from '../../redux';

import Button from 'reactstrap/lib/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const enhance = compose(
  connect(
    (state) => state,
    { setLogin, setLogout }
  )
);

const LoginButton = (props) => {
  return (
    <Button color="primary" size="lg" onClick={props.onclick}>
      <FontAwesomeIcon icon={faFacebook} /> Facebook Login
    </Button>
  );
};

export default enhance(LoginButton);
