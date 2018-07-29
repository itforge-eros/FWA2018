import React, { Fragment } from 'react';
import PropType from 'prop-types';
import { Route, Switch, Redirect } from 'react-router';
import Loadable from 'react-loadable';
import AppLoader from './common/components/AppLoader';
import { compose } from 'recompose';
import { connect } from 'react-redux';

// Import modules/routes
import PageNotFound from './common/components/PageNotFound';

import NavBar from './common/components/Navbar/Navbar';

// Code splitting with dynamic import
// https://reactjs.org/docs/code-splitting.html
const Home = Loadable({
  loader: () => import('./home'),
  loading: AppLoader
});

const Profile = Loadable({
  loader: () => import('./profile'),
  loading: AppLoader
});

const Quest = Loadable({
  loader: () => import('./quest'),
  loading: AppLoader
});

const Code = Loadable({
  loader: () => import('./code'),
  loading: AppLoader
});

const Friend = Loadable({
  loader: () => import('./friend'),
  loading: AppLoader
});

const Pending = Loadable({
  loader: () => import('./pending'),
  loading: AppLoader
});

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);

const Router = (props) => {
  const {
    user: { login }
  } = props;

  return (
    <Fragment>
      {login ? <NavBar /> : ''}
      <Switch>
        <Route exact path="/">
          {login ? <Redirect to="/pending" /> : <Home />}
        </Route>
        <Route path="/pending">{login ? <Pending /> : <Redirect to="/" />}</Route>
        <Route path="/profile/:page">{login ? <Profile /> : <Redirect to="/" />}</Route>
        <Route path="/quests/:page">{login ? <Quest /> : <Redirect to="/" />}</Route>
        <Route path="/friends/:page">{login ? <Friend /> : <Redirect to="/" />}</Route>
        <Route path="/code/:page">{login ? <Code /> : <Redirect to="/" />}</Route>
        <Route path="*">{login ? <PageNotFound /> : <Redirect to="/" />}</Route>
      </Switch>
    </Fragment>
  );
};

Router.propTypes = {
  user: PropType.shape({
    login: PropType.bool
  })
};

export default enhance(Router);
