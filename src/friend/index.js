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
const NameList = Loadable({
  loader: () => import('./components/NameList'),
  loading: AppLoader
});

const Friend = (props) => {
  const {
    profile: { create, loading, approve },
    router: {
      location: { pathname }
    }
  } = props;

  return loading ? (
    <AppLoader isLoading={true} />
  ) : (
    <Fragment>
      {!create && pathname !== '/profile/create' ? <Redirect to="/profile/create" /> : ''}
      {create && !approve && pathname !== '/pending' ? <Redirect to="/pending" /> : ''}

      <Route path="/friends/list" component={NameList} />
    </Fragment>
  );
};

Friend.propTypes = {
  profile: PropTypes.shape({
    create: PropTypes.bool,
    approve: PropTypes.bool,
    loading: PropTypes.bool
  }),
  router: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  })
};

export default enhance(Friend);
