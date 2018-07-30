import React, { Fragment } from 'react';
import { compose, lifecycle } from 'recompose';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import MyQRCode from './components/MyQRCode';

const enhance = compose(
  withRouter,
  lifecycle({
    componentDidMount() {
      document.title = 'Freshy IT 2018 | My QR Code';
    }
  })
);

const QRCode = () => {
  return (
    <Fragment>
      <Route path="/code/qscan" component={MyQRCode} />
      <Route path="/code/quest" component={MyQRCode} />
    </Fragment>
  );
};

export default enhance(QRCode);
