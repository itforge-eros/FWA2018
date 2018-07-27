import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loadable from 'react-loadable';
import AppLoader from '../common/components/AppLoader';

// enhance
const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    {}
  )
);

// Components
const EditProfile = Loadable({
  loader: () => import('./edit'),
  loading: AppLoader
});

const MyProfile = Loadable({
  loader: () => import('./me'),
  loading: AppLoader
});

const CreateProfile = Loadable({
  loader: () => import('./create'),
  loading: AppLoader
});

const Profile = (props) => {
  const {
    profile: { create },
    router: {
      location: { pathname }
    }
  } = props;
  return (
    <Fragment>
      {!create && pathname !== '/profile/create' ? <Redirect to="/profile/create" /> : ''}
      <Route path="/profile/me" component={MyProfile} />
      <Route path="/profile/edit" component={EditProfile} />
      <Route path="/profile/create" component={CreateProfile} />
    </Fragment>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    create: PropTypes.bool
  }),
  router: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  })
};

export default enhance(Profile);
