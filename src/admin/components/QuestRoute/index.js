import React, { Fragment } from 'react';
import { compose, lifecycle } from 'recompose';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';

import Loadable from 'react-loadable';
import AppLoader from '../../../common/components/AppLoader';

const enhance = compose(
  withRouter,
  lifecycle({})
);

const QuestList = Loadable({
  loader: () => import('../QuestList'),
  loading: AppLoader
});

const UserDetail = Loadable({
  loader: () => import('../UserDetail'),
  loading: AppLoader
});

const UserRoute = () => {
  return (
    <Fragment>
      <Route path="/admin/quest/list" component={QuestList} />
      <Route path="/admin/quest/detail/:id" component={UserDetail} />
    </Fragment>
  );
};

export default enhance(UserRoute);