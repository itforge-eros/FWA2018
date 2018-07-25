import React from 'react';
import PropType from 'prop-types';
import { Route, Switch, Redirect } from 'react-router';
import Loadable from 'react-loadable';
import AppLoader from './common/components/AppLoader';
import { compose } from 'recompose';
import { connect } from 'react-redux';

// Import modules/routes
import PageNotFound from './common/components/PageNotFound';

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

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);

const Router = (props) => (
  <Switch>
    <Route exact path="/">
      {props.user.login ? <Redirect to="/profile/me" /> : <Home />}
    </Route>
    <Route path="/profile/:page" component={Profile} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);

Router.propType = {
  user: PropType.shape({
    login: PropType.bool
  })
};

export default enhance(Router);
