import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import Loadable from 'react-loadable';
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
// const QuestList = Loadable({
//   loader: () => import('./list'),
//   loading: AppLoader
// });

const Code = (props) => {
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

      <Route path="/code/quest" />
      <Route path="/code/friend" />
    </Fragment>
  );
};

Code.propTypes = {
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

export default enhance(Code);
