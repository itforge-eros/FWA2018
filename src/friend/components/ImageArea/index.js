import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLogin, setLogout } from '../../../home/redux';
import { setProfile, resetProfile } from '../../../profile/redux';
import { getFriends } from '../../redux';

import ImageBox from '../ImageBox';

import './ImageArea.css';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    { getFriends, setLogin, setLogout, setProfile, resetProfile }
  ),
  lifecycle({
    componentDidMount() {
      this.props.getFriends(this.props.user.user.uid);
    }
  })
);

const ImageArea = (props) => {
  const {
    friends: { friends, loading }
  } = props;
  return (
    <Container>
      <Row>
        {loading ? (
          <div className="ImageArea-loading">Loading Friends...</div>
        ) : (
          friends.map((friend) => {
            return <ImageBox id={friend} key={friend} />;
          })
        )}
      </Row>
    </Container>
  );
};

ImageArea.propTypes = {
  friends: PropTypes.shape({
    friends: PropTypes.array,
    loading: PropTypes.bool
  })
};

export default enhance(ImageArea);
