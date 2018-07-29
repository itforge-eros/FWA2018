import React from 'react';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Quests from './components/QuestList';

// import { resetForm } from '../redux';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    {}
  ),
  lifecycle({
    componentDidMount() {
      document.title = 'Freshy IT 2018 | Quest Path';
    }
  })
);

const QuestList = (props) => {
  // const {} = props;
  return <Quests />;
};

QuestList.propTypes = {
  profile: PropTypes.shape({
    create: PropTypes.bool
  })
};

export default enhance(QuestList);
