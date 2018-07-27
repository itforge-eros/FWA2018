import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import './ProfilePending.css';

import Loader from '../common/components/AppLoader';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    {}
  )
);

const PendingProfile = (props) => {
  const {
    profile: { approve, loading, create }
  } = props;

  const Pending = approve ? (
    <Redirect to="/profile/me" />
  ) : (
    <div className="pending-container">
      <div className="pending-header">
        <h1>Pending Approval</h1>
      </div>
      <div className="pending-content">ขณะนี้ทีมงานกำลังตรวจสอบข้อมูลส่วนตัวที่ท่านกรอกครับ</div>
    </div>
  );

  const Create = create ? Pending : <Redirect to="/profile/create" />;

  return loading ? <Loader isLoading /> : Create;
};

PendingProfile.propTypes = {
  profile: PropTypes.shape({ approve: PropTypes.bool, loading: PropTypes.bool, create: PropTypes.bool })
};

export default enhance(PendingProfile);
