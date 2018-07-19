import React from 'react';
import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';

import LoginBlock from './components/LoginBlock/LoginBlock';
// import UserRepos from './containers/UserRepos';
import './style.css';

const enhance = compose(
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
