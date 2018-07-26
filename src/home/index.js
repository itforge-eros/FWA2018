import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { lifecycle, compose } from 'recompose';

import LoginBlock from './components/LoginBlock/LoginBlock';
import './style.css';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    {}
  ),
  lifecycle({
    componentDidMount() {
      document.title = 'Freshy IT 2018 | Home';
    }
  })
);
const Home = () => <LoginBlock />;

export default enhance(Home);
