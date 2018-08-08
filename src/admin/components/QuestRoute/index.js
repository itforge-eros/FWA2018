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

const QuestQR = Loadable({
  loader: () => import('../QuestQRCode'),
  loading: AppLoader
});

const QuestDetail = Loadable({
  loader: () => import('../QuestDetail'),
  loading: AppLoader
});

const QuestParticipant = Loadable({
  loader: () => import('../QuestParticipant'),
  loading: AppLoader
});

const UserRoute = () => {
  return (
    <Fragment>
      <Route path="/admin/quest/list" component={QuestList} />
      <Route path="/admin/quest/detail/:id" component={QuestDetail} />
      <Route path="/admin/quest/code/:id" component={QuestQR} />
      <Route path="/admin/quest/participant/:id" component={QuestParticipant} />
    </Fragment>
  );
};

export default enhance(UserRoute);
