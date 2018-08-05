import React, { Fragment } from 'react';
import { compose, lifecycle } from 'recompose';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import AppLoader from '../../common/components/AppLoader';

const enhance = compose(
  withRouter,
  lifecycle({
    componentDidMount() {
      document.title = 'Freshy IT 2018 | My QR Code';
    }
  })
);

const ScanQRCode = Loadable({
  loader: () => import('./components/ScanQRCode'),
  loading: AppLoader
});

const CheckinQuest = Loadable({
  loader: () => import('./components/CheckQuest'),
  loading: AppLoader
});

const QRCode = () => {
  return (
    <Fragment>
      <Route path="/code/qscan" component={ScanQRCode} />
      <Route path="/code/qadd/:id" component={CheckinQuest} />
      {/* <Route path="/code/quest" component={MyQRCode} /> */}
    </Fragment>
  );
};

export default enhance(QRCode);
