import React from 'react';
import PropTypes from 'prop-types';
import { lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';

import { setLogin, setLogout } from '../../redux';
import { setProfile } from '../../../profile/redux';

import Button from 'reactstrap/lib/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import { auth, provider } from '../../../firebase';

const enhance = compose(
  connect(
    (state) => state,
    { setLogin, setLogout, setProfile }
  ),
  lifecycle({
    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.props.setLogin(user);
          this.props.setProfile();
        }
      });
    }
  })
);

const LoginButton = (props) => {
  const login = () => {
    auth.signInWithPopup(provider).then(() => {});
  };

  const logout = () => {
    auth.signOut().then(() => {
      props.setLogout();
    });
  };

  return (
    <Button color="primary" size="lg" onClick={props.user.login ? () => logout() : () => login()}>
      <FontAwesomeIcon icon={faFacebook} /> Facebook Login
    </Button>
  );
};

LoginButton.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.boolean
  })
};

export default enhance(LoginButton);
