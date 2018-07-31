import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { firestore } from '../../../firebase';

import { Container, Table, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import './UserList.css';

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);
class UserList extends Component {
  state = {
    users: [],
    loading: true,
    year: 0
  };

  componentDidMount() {
    this.getList();
  }

  getList() {
    this.setState({ loading: true, users: [] });
    firestore
      .collection('profile')
      .get()
      .then((querySnapshot) => {
        let users = [];
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data().info, id: doc.id, approve: doc.data().approve });
        });
        this.setState({ users, loading: false });
      });
  }

  approve(uid) {
    this.setState({ loading: true });
    firestore
      .collection('profile')
      .doc(uid)
      .update({
        approve: true
      })
      .then(() => {
        this.getList();
      });
  }

  changeYear(year) {
    this.setState({ year: year });
  }

  render() {
    const { users, loading, year } = this.state;

    users.sort((a, b) => a.student_id > b.student_id);

    return loading ? (
      <div className="AppLoader">Loading...</div>
    ) : (
      <Container>
        <Row>
          <Col className="UserList-col">
            <Button
              className="UserList-btn"
              onClick={() => this.changeYear(1)}
              color={year === 1 ? 'success' : 'warning'}
            >
              ปี 1
            </Button>
          </Col>
          <Col className="UserList-col">
            <Button
              className="UserList-btn"
              onClick={() => this.changeYear(2)}
              color={year === 2 ? 'success' : 'warning'}
            >
              ปี 2
            </Button>
          </Col>
          <Col className="UserList-col">
            <Button
              className="UserList-btn"
              onClick={() => this.changeYear(3)}
              color={year === 3 ? 'success' : 'warning'}
            >
              ปี 3
            </Button>
          </Col>
          <Col className="UserList-col">
            <Button
              className="UserList-btn"
              onClick={() => this.changeYear(4)}
              color={year === 4 ? 'success' : 'warning'}
            >
              ปี 4
            </Button>
          </Col>
          <Col className="UserList-col">
            <Button
              className="UserList-btn"
              onClick={() => this.changeYear(0)}
              color={year === 0 ? 'success' : 'warning'}
            >
              ทั้งหมด
            </Button>
          </Col>
        </Row>
        <Table hover className="UserList">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Year</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return year === 0 || year === parseInt(user.year, 10) ? (
                <tr key={user.id}>
                  <td>{user.student_id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.year}</td>
                  <td>
                    <Link to={`/admin/user/detail/${user.id}`}>
                      <Button color="primary" size="sm">
                        View
                      </Button>
                    </Link>{' '}
                    <Button
                      color={user.approve ? 'success' : 'warning'}
                      onClick={() => this.approve(user.id)}
                      size="sm"
                      disabled={user.approve}
                    >
                      {user.approve ? 'Approved' : 'Approve'}
                    </Button>
                  </td>
                </tr>
              ) : (
                ''
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
