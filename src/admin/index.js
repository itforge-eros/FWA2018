import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { compose, lifecycle } from 'recompose';
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
  ),
  lifecycle({
    componentDidMount() {
      document.title = 'Freshy IT 2018 | Admin Panel';
    }
  })
);

// Components
const UserRoute = Loadable({
  loader: () => import('./components/UserRoute'),
  loading: AppLoader
});

const Admin = (props) => {
  const {
    profile: { create, approve, admin },
    router: {
      location: { pathname }
    }
  } = props;

  return (
    <Fragment>
      {!create && pathname !== '/profile/create' ? <Redirect to="/profile/create" /> : ''}
      {create && !approve && pathname !== '/pending' ? <Redirect to="/pending" /> : ''}
      {admin ? '' : <Redirect to="/profile/me" />}

      <Route path="/admin/user/" component={UserRoute} />
    </Fragment>
  );
};

Admin.propTypes = {
  profile: PropTypes.shape({
    admin: PropTypes.bool,
    create: PropTypes.bool,
    approve: PropTypes.bool
  }),
  router: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  })
};

export default enhance(Admin);
