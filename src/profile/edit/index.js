import React from 'react';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import EditProfile from './components/EditProfile/editprofile.js';

const enhance = compose(
  withRouter,
  lifecycle({
    componentDidMount() {
      document.title = 'Freshy IT 2018 | Edit Profile';
    }
  })
);
const ProfileEdit = () => {
  return <EditProfile />;
};

export default enhance(ProfileEdit);
