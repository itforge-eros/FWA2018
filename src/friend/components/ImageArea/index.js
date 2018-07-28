import React from 'react';
import { Container, Row } from 'reactstrap';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ImageBox from '../ImageBox';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    {}
  )
);

const ImageArea = () => {
  return (
    <Container>
      <Row>
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
      </Row>
    </Container>
  );
};

export default enhance(ImageArea);
