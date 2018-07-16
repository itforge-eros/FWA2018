import React from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';
import AppLoader from './common/components/AppLoader';

// Import modules/routes
import PageNotFound from './common/components/PageNotFound';

// Code splitting with dynamic import
// https://reactjs.org/docs/code-splitting.html
const Home = Loadable({
  loader: () => import('./home'),
  loading: AppLoader
});

const EditProfile = Loadable({
  loader: () => import('./profile/edit/index.js'),
  loading: AppLoader
});

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile/edit" component={EditProfile} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);
