import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setProfile } from '../profile/redux';
import { auth } from '../firebase';

import './ProfilePending.css';

import Loader from '../common/components/AppLoader';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    { setProfile }
  ),
  lifecycle({
    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.props.setProfile(user.displayName);
        }
      });
    }
  })
);

const PendingProfile = (props) => {
  const {
    profile: { approve, loading, create, displayName },
    setProfile
  } = props;

  const checkPending = () => {
    setProfile(displayName);
  };

  const Pending = approve ? (
    <Redirect to="/profile/me" />
  ) : (
    <div className="pending-container">
      <div className="pending-header">
        <h1>Pending Approval</h1>
      </div>
      <div className="pending-content">
        ขณะนี้ทีมงานกำลังตรวจสอบข้อมูลส่วนตัวที่ท่านกรอกครับ<br />
        <p className="pending-check" onClick={() => checkPending()}>
          ตรวจสอบอีกครั้ง
        </p>
      </div>
    </div>
  );

  const Create = create ? Pending : <Redirect to="/profile/create" />;

  return loading ? <Loader isLoading /> : Create;
};

PendingProfile.propTypes = {
  profile: PropTypes.shape({
    approve: PropTypes.bool,
    loading: PropTypes.bool,
    create: PropTypes.bool,
    displayName: PropTypes.string
  }),
  setProfile: PropTypes.func
};

export default enhance(PendingProfile);
