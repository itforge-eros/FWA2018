import React, { Fragment } from 'react';
import { Route } from 'react-router';

import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import Loadable from 'react-loadable';
import AppLoader from '../common/components/AppLoader';

// enhance
const enhance = compose(withRouter);

// Components
const EditProfile = Loadable({
  loader: () => import('./edit'),
  loading: AppLoader
});

const MyProfile = Loadable({
  loader: () => import('./me'),
  loading: AppLoader
});

const Profile = () => {
  return (
    <Fragment>
      <Route path="/profile/me" component={MyProfile} />
      <Route path="/profile/edit" component={EditProfile} />
    </Fragment>
  );
};

export default enhance(Profile);
