import React from 'react';
import PropTypes from 'prop-types';

const AppLoader = ({ isLoading, error }) => {
  let content = '';

  if (isLoading) {
    content = (
      <div className="AppLoader">
        <p>Loading...</p>
      </div>
    );
  } else if (error) {
    console.log(error);
    content = 'Sorry, there was a problem loading the page.';
  }

  return <div className="AppLoader">{content}</div>;
};

AppLoader.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object
};

export default AppLoader;
