import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { firestore } from '../../../firebase';

import { Container, Button, Row, Col, Input, Form } from 'reactstrap';

import AlertBox from '../AlertBox';

import './QuestParticipantAdd.css';

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);

class QuestParticipantAdd extends Component {
  state = {
    student_id: '',
    loading: true,
    error: false,
    message: ''
  };

  keyEnterPress(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      e.stopPropagation();
      if (this.state.student_id !== '') {
        this.addParticipant(this.props.quest_id);
      }
    }
  }

  handleChange(value) {
    this.setState({ student_id: value });
  }

  async addAll(quest_id) {
    for (let i = 61070001; i < 61070369; i++) {
      this.setState({
        student_id: i.toString()
      });

      await this.addParticipant(quest_id);
    }
  }

  async addAllbyHunt(quest_id) {
    for (let i = 61070000; i < 61070369; i++) {
      this.setState({
        student_id: i.toString()
      });

      let profile = await firestore
        .collection('profile')
        .where('info.student_id', '==', this.state.student_id)
        .get()
        .then((querySnapshot) => {
          let students = [];
          querySnapshot.forEach((doc) => {
            students.push({ ...doc.data(), id: doc.id });
          });
          return students;
        });
      profile = profile[0];

      if (typeof profile === 'undefined') {
        this.setState({
          student_id: '',
          message: 'Profile not found',
          error: true
        });
        continue;
      }

      let y1 = await firestore
        .collection('profile')
        .doc(profile.id)
        .collection('friends')
        .where('profile.info.year', '==', '1')
        .get()
        .then((doc) => {
          return doc.size;
        });

      let y2 = await firestore
        .collection('profile')
        .doc(profile.id)
        .collection('friends')
        .where('profile.info.year', '==', '2')
        .get()
        .then((doc) => {
          return doc.size;
        });
      let y3 = await firestore
        .collection('profile')
        .doc(profile.id)
        .collection('friends')
        .where('profile.info.year', '==', '3')
        .get()
        .then((doc) => {
          return doc.size;
        });
      let y4 = await firestore
        .collection('profile')
        .doc(profile.id)
        .collection('friends')
        .where('profile.info.year', '==', '4')
        .get()
        .then((doc) => {
          return doc.size;
        });

      let friend = { 1: y1, 2: y2, 3: y3, 4: y4 };

      if (friend[1] >= 100 && friend[2] >= 30 && friend[3] >= 10 && friend[4] >= 5) {
        await this.addParticipant(quest_id);
      }
    }
  }

  async addParticipant(quest_id) {
    if (this.state.student_id === '') {
      return;
    }

    let profile = await firestore
      .collection('profile')
      .where('info.student_id', '==', this.state.student_id)
      .get()
      .then((querySnapshot) => {
        let students = [];
        querySnapshot.forEach((doc) => {
          students.push({ ...doc.data(), id: doc.id });
        });
        return students;
      });
    profile = profile[0];

    if (typeof profile === 'undefined') {
      this.setState({
        student_id: '',
        message: 'Profile not found',
        error: true
      });
      return;
    }

    let add = Date.now();

    await firestore
      .collection('profile')
      .doc(profile.id)
      .collection('quest')
      .doc(quest_id)
      .set({ add });

    await firestore
      .collection('quest')
      .doc(quest_id)
      .collection('participant')
      .doc(profile.id)
      .set({
        add,
        profile
      })
      .then(() => {
        this.setState({
          student_id: '',
          message: `Added - ${profile.info.nickname} - ${profile.info.prefix}${profile.info.firstname} ${
            profile.info.lastname
          }`,
          error: false
        });
      });
  }

  resetBox = this.resetBox.bind(this);

  resetBox() {
    this.setState({ error: false, message: '' });
  }

  render() {
    const { quest_id } = this.props;
    const { error, message } = this.state;

    return (
      <Fragment>
        {message ? <AlertBox message={message} error={error} reset={this.resetBox} /> : ''}
        <Container>
          <Form onKeyDown={(e) => this.keyEnterPress(e)}>
            <Row className="QuestParticipantAdd-Container">
              <Col>
                <Input
                  type="text"
                  placeholder="Student ID"
                  onChange={(e) => this.handleChange(e.target.value)}
                  value={this.state.student_id}
                />
              </Col>
              <Col>
                <Button color="success" onClick={() => this.addParticipant(quest_id)}>
                  Add
                </Button>{' '}
                <Button color="warning" onClick={() => this.addAllbyHunt(quest_id)}>
                  Add by Hunt
                </Button>{' '}
                <Button color="danger" onClick={() => this.addAll(quest_id)}>
                  Add All
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Fragment>
    );
  }
}

QuestParticipantAdd.propTypes = {
  user: PropTypes.shape({
    user: PropTypes.shape({
      uid: PropTypes.string
    })
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  quest_id: PropTypes.string,
  student_id: PropTypes.string
};

export default enhance(QuestParticipantAdd);
