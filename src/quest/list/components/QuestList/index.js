import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { firestore } from '../../../../firebase';

import QuestPath from '../QuestPath/';
import QuestBox from '../QuestBox';

import './QuestList.css';

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);

class Quests extends Component {
  state = {
    quests: [],
    pass: [],
    open: 0
  };

  componentDidMount() {
    const {
      user: {
        user: { uid }
      }
    } = this.props;

    firestore
      .collection('quest')
      .get()
      .then((query) => {
        let quests = [];
        let open = 0;
        query.forEach((doc) => {
          quests.push({ id: doc.id, ...doc.data() });
          if (!doc.data().hidden) {
            open += 1;
          }
        });
        this.setState({ quests, open });
      });

    firestore
      .collection('profile')
      .doc(uid)
      .collection('quests')
      .get()
      .then((query) => {
        let pass = [];
        query.forEach((doc) => {
          pass.push(doc.id);
        });

        this.setState({ pass });
      });
  }

  render() {
    let quests = this.state.quests.sort((a, b) => a.id > b.id);
    let pass = this.state.pass;
    let open = this.state.open;

    return (
      <Fragment>
        <div className="questmain-container">
          <div className="questmain-header">
            <h1>{'Quests'}</h1>
          </div>
          <div className="questpath-container">
            <Container>
              <Row>
                {quests.map((quest) => {
                  return !quest.hidden ? <QuestPath key={quest.id} pass={pass.includes(quest.id)} /> : '';
                })}
              </Row>
            </Container>
          </div>
          <Container className="quests-container">
            {quests.map((quest) => {
              return !quest.hidden ? <QuestBox key={quest.id} name={quest.name} expire={quest.expire} /> : '';
            })}
            {open === 0 ? <div className="QuestComing">Coming soon...</div> : ''}
          </Container>
        </div>
        <div className="questqr-container">
          <Link to="/code/qscan">
            <Button color="success" size="lg">
              เช็คชื่อเควส
            </Button>
          </Link>
        </div>
        <div className="questbtn-container">
          <Link to="/friends/list">
            <Button color="warning" size="lg">
              ล่ารายชื่อ
            </Button>
          </Link>
        </div>
      </Fragment>
    );
  }
}

Quests.propTypes = {
  user: PropTypes.shape({
    user: PropTypes.shape({ uid: PropTypes.string })
  })
};

export default enhance(Quests);
