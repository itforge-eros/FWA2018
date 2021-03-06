import React from 'react';
import PropTypes from 'prop-types';
import { lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';

import { setLogin, setLogout, setLoading } from '../../redux';
import { setProfile } from '../../../profile/redux';

import Button from 'reactstrap/lib/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import { auth, provider } from '../../../firebase';

const enhance = compose(
  connect(
    (state) => state,
    { setLogin, setLogout, setProfile, setLoading }
  ),
  lifecycle({
    componentDidMount() {
      auth.getRedirectResult().then((user) => {
        if (user.user) {
          this.props.setLogin(user.user);
          this.props.setProfile(user);
          this.props.setLoading(false);
        } else {
          auth.onAuthStateChanged((user) => {
            if (user) {
              this.props.setLogin(user);
              this.props.setProfile(user);
              this.props.setLoading(false);
            }
          });
        }
      });
    }
  })
);

const LoginButton = (props) => {
  const {
    user: { loading },
    setLoading
  } = props;

  const login = () => {
    setLoading(true);
    auth.signInWithRedirect(provider);
  };

  const logout = () => {
    auth.signOut().then(() => {
      props.setLogout();
    });
  };

  return loading ? (
    <div className="AppLoader">Logging in...</div>
  ) : (
    <Button color="primary" size="lg" onClick={props.user.login ? () => logout() : () => login()}>
      <FontAwesomeIcon icon={faFacebook} /> Facebook Login
    </Button>
  );
};

LoginButton.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.boolean,
    loading: PropTypes.boolean
  }),
  setLoading: PropTypes.func
};

export default enhance(LoginButton);
