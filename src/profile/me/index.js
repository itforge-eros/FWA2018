import React from 'react';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import MyProfile from './components/Profile';

const enhance = compose(
  withRouter,
  lifecycle({
    componentDidMount() {
      document.title = 'Freshy IT 2018 | My Profile';
    }
  })
);
const ProfileEdit = () => {
  return <MyProfile />;
};

export default enhance(ProfileEdit);
