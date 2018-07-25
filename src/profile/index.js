import React, { Fragment } from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';

import Loadable from 'react-loadable';
import AppLoader from '../common/components/AppLoader';

// Components
const EditProfile = Loadable({
  loader: () => import('./edit'),
  loading: AppLoader
});

const Profile = () => {
  return (
    <Fragment>
      <Route path="/profile/me" component={EditProfile} />
      <Route path="/profile/edit" component={EditProfile} />
    </Fragment>
  );
};

export default Profile;
