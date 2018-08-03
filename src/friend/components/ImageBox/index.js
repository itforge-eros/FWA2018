import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { getProfile } from '../../redux';

import { Col } from 'reactstrap';

import './ImageBox.css';

const enhance = compose(
  connect(
    (state) => state,
    { getProfile }
  ),
  lifecycle({
    async componentWillMount() {
      this.props.getProfile(this.props.id);
    }
  })
);

const ImageBox = (props) => {
  const {
    friends: { profile, selectYear },
    id
  } = props;
  console.log(profile);
  const loading = typeof profile[id] === typeof undefined;

  let Box = loading ? (
    ''
  ) : parseInt(profile[id].year, 10) === selectYear ? (
    <Col xs="6" md="4" lg="3">
      <div className="ImageBox-container">
        <img alt="profile" src={loading ? '' : `${profile[id].photoURL}?width=250`} />
      </div>
      <div className="ImageBox-content">
        <p>
          {loading ? 'Loading' : profile[id].nickname}
          <br />
          {loading ? '' : profile[id].student_id}
        </p>
      </div>
    </Col>
  ) : (
    ''
  );

  return Box;
};

ImageBox.propTypes = {
  id: PropTypes.string,
  friends: PropTypes.shape({
    profile: PropTypes.object,
    selectYear: PropTypes.number
  })
};

export default enhance(ImageBox);
