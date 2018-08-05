import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { Col } from 'reactstrap';

import './ImageBox.css';

const enhance = compose(
  connect(
    (state) => state,
    {}
  ),
  lifecycle({})
);

const ImageBox = (props) => {
  const { data } = props;

  let Box = (
    <Col xs="6" md="4" lg="3">
      <div className="ImageBox-container">
        <img alt="data" src={`${data.profile.photoURL}?width=250`} />
      </div>
      <div className="ImageBox-content">
        <p>
          {data.profile.info.nickname}
          <br />
          {data.profile.info.student_id}
        </p>
      </div>
    </Col>
  );

  return Box;
};

ImageBox.propTypes = {
  data: PropTypes.object
};

export default enhance(ImageBox);
