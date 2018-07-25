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

const Profile = (props) => {
  const {
    match: {
      params: { page }
    }
  } = props;

  return (
    <Fragment>
      <Route path="/profile/me" component={EditProfile} />
      <Route path="/profile/edit" component={EditProfile} />
    </Fragment>
  );
};

Profile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string
    })
  })
};

export default Profile;
