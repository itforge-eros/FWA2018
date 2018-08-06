import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { firestore } from '../../../firebase';

import { Container, Table, Button } from 'reactstrap';

import './QuestParticipant.css';

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);
class UserList extends Component {
  state = {
    users: [],
    loading: true
  };

  componentDidMount() {
    this.getList(this.props.match.params.id);
  }

  getList(quest_id) {
    this.setState({ loading: true, users: [] });
    firestore
      .collection('quest')
      .doc(quest_id)
      .collection('participant')
      .get()
      .then((querySnapshot) => {
        let users = [];
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        this.setState({
          users,
          loading: false
        });
      });
  }

  deleteUser(quest_id, user_id) {
    this.setState({ loading: true });

    firestore
      .collection('quest')
      .doc(quest_id)
      .collection('participant')
      .doc(user_id)
      .delete()
      .then(() => {
        this.getList(this.props.match.params.id);
      });
  }

  render() {
    const { users, loading } = this.state;

    const {
      match: {
        params: { id }
      }
    } = this.props;

    return loading ? (
      <div className="AppLoader">Loading...</div>
    ) : (
      <Container>
        <Table hover className="QuestParticipant">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Year</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              user = { id: user.id, ...user.profile.info };
              return (
                <tr key={user.id}>
                  <td>{user.student_id}</td>
                  <td>
                    {user.prefix}
                    {user.firstname} {user.lastname}
                  </td>
                  <td>{user.year}</td>
                  <td>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => {
                        this.deleteUser(id, user.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="4">Total : {users.length}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

UserList.propTypes = {
  user: PropTypes.shape({
    user: PropTypes.shape({
      uid: PropTypes.string
    })
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default enhance(UserList);
