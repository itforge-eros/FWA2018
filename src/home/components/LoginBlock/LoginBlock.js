import React from 'react';

import LoginButton from '../LoginButton/LoginButtion';

import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { setLogin, setLogout } from '../../redux';
import { auth, provider } from '../../../firebase';

import './LoginBlock.css';

const enhance = compose(
  connect(
    (state) => state,
    { setLogin, setLogout }
  ),
  lifecycle({
    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.props.setLogin(user);
        }
      });
    }
  })
);

const LoginBlock = (props) => {
  const login = () => {
    auth.signInWithPopup(provider).then((result) => {
      props.setLogin(result.user);
    });
  };

  const logout = () => {
    auth.signOut().then(() => {
      props.setLogout();
    });
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome back!</h1>
      </div>
      <div className="loginpic-container">
        <LoginButton onclick={props.login ? () => logout() : () => login()} />
      </div>
    </div>
  );
};

export default enhance(LoginBlock);
