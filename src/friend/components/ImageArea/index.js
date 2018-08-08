import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLogin, setLogout } from '../../../home/redux';
import { setProfile, resetProfile } from '../../../profile/redux';
import { getFriends, setTotal } from '../../redux';

import ImageBox from '../ImageBox';

import './ImageArea.css';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    { getFriends, setLogin, setLogout, setProfile, resetProfile, setTotal }
  ),
  lifecycle({
    componentDidMount() {
      this.props.getFriends(this.props.user.user.uid);
      let count = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0
      };
      this.props.friends.friends.forEach((friend) => {
        count[0] += 1;
        count[parseInt(friend.profile.info.year, 10)] += 1;
      });

      this.props.setTotal(count);
    }
  })
);

const ImageArea = (props) => {
  const {
    friends: { friends, loading, selectYear, total },
    setTotal
  } = props;

  if (typeof total[0] === 'undefined') {
    setTotal({
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0
    });
  }

  return (
    <Container>
      <Row className="ImageArea-container">
        {loading ? (
          <div className="ImageArea-loading">Loading Friends...</div>
        ) : (
          friends
            .sort((a, b) => parseInt(a.profile.info.student_id, 10) - parseInt(b.profile.info.student_id, 10))
            .map((friend) => {
              return parseInt(friend.profile.info.year, 10) === selectYear || selectYear === 0 ? (
                <ImageBox data={friend} key={friend.id} />
              ) : (
                ''
              );
            })
        )}
      </Row>
    </Container>
  );
};

ImageArea.propTypes = {
  friends: PropTypes.shape({
    friends: PropTypes.array,
    loading: PropTypes.bool,
    selectYear: PropTypes.number,
    total: PropTypes.object
  }),
  setTotal: PropTypes.func
};

export default enhance(ImageArea);
