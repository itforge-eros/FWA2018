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
      document.title = 'Freshy IT 2018 | Friend List';
    }
  })
);

// Components
const NameList = Loadable({
  loader: () => import('./components/NameList'),
  loading: AppLoader
});

const FriendProfile = Loadable({
  loader: () => import('./components/FriendProfile'),
  loading: AppLoader
});

const Friends = (props) => {
  const {
    profile: { create, approve },
    router: {
      location: { pathname }
    }
  } = props;

  return (
    <Fragment>
      {!create && pathname !== '/profile/create' ? <Redirect to="/profile/create" /> : ''}
      {create && !approve && pathname !== '/pending' ? <Redirect to="/pending" /> : ''}

      <Route path="/friends/list" component={NameList} />
      <Route path="/friends/detail/:id" component={FriendProfile} />
    </Fragment>
  );
};

Friends.propTypes = {
  profile: PropTypes.shape({
    create: PropTypes.bool,
    approve: PropTypes.bool
  }),
  router: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  })
};

export default enhance(Friends);
