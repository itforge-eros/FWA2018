import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

const enhance = compose(withRouter);
const PageNotFound = () => {
  return <h2 className="text-center">Page not found!</h2>;
};

export default enhance(PageNotFound);
