import React from 'react';

import LoginButton from '../LoginButton/LoginButtion';

import './LoginBlock.css';

const LoginBlock = () => (
  <div className="login-container">
    <div className="login-header">
      <h1>Welcome back!</h1>
    </div>
    <div className="loginpic-container">
      <LoginButton />
    </div>
  </div>
);

export default LoginBlock;
