import React from 'react';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileCreate from './components/CreateProfile';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    {}
  ),
  lifecycle({
    componentDidMount() {
      document.title = 'Freshy IT 2018 | Edit Profile';
    }
  })
);

const CreateProfile = (props) => {
  const {
    profile: { create }
  } = props;
  return create ? <Redirect to="/profile/me" /> : <ProfileCreate />;
};

CreateProfile.propTypes = {
  profile: PropTypes.shape({
    create: PropTypes.bool
  })
};

export default enhance(CreateProfile);
