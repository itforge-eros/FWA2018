import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { firestore } from '../../../firebase';

import { Container, Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './QuestList.css';

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);
class UserList extends Component {
  state = {
    quests: [],
    loading: true
  };

  componentDidMount() {
    this.getList();
  }

  getList() {
    this.setState({ loading: true, quests: [] });
    firestore
      .collection('quest')
      .get()
      .then((querySnapshot) => {
        let quests = [];
        querySnapshot.forEach((doc) => {
          quests.push({ ...doc.data(), id: doc.id });
        });
        this.setState({
          quests,
          loading: false
        });
      });
  }

  render() {
    const { quests, loading } = this.state;

    return loading ? (
      <div className="AppLoader">Loading...</div>
    ) : (
      <Container>
        <Table hover className="UserList">
          <thead>
            <tr>
              <th>Quest ID</th>
              <th>Quest Name</th>
              <th>Quest Open</th>
              <th>Quest Hide</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {quests.map((quest) => {
              return (
                <tr key={quest.id}>
                  <td>{quest.id}</td>
                  <td>{quest.name}</td>
                  <td>{quest.open ? 'Yes' : 'No'}</td>
                  <td>{quest.hidden ? 'Yes' : 'No'}</td>
                  <td>
                    <Link to={`/admin/quest/detail/${quest.id}`}>
                      <Button color="primary" size="sm">
                        View / Edit
                      </Button>
                    </Link>{' '}
                    <Link to={`/admin/quest/code/${quest.id}`}>
                      <Button color="success" size="sm">
                        Check-in QR
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
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
  })
};

export default enhance(UserList);
