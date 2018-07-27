import React from 'react';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileCreate from './components/CreateProfile';

import { resetForm } from '../redux';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    { resetForm }
  ),
  lifecycle({
    componentDidMount() {
      document.title = 'Freshy IT 2018 | Create Profile';
      this.props.resetForm();
    }
  })
);

const CreateProfile = (props) => {
  const {
    profile: { create }
  } = props;
  return create ? <Redirect to="/pending" /> : <ProfileCreate />;
};

CreateProfile.propTypes = {
  profile: PropTypes.shape({
    create: PropTypes.bool
  })
};

export default enhance(CreateProfile);
