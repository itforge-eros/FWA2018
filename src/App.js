import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import { Container, Row, Col } from 'reactstrap';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// routes
import routes from './asyncRoutes';

// common components
import Header from './common/components/Header';
import Footer from './common/components/Footer';

// work components
import Newsblock from './components/NewsBlock/newsblock';
import Profileblock from './components/ProfileBlock/profileblock';
import Mainquestblock from './components/MainQuestBlock/mainquestblock';

import Profile from './components/Profile/profile';
import Namelist from './components/Namelist/namelist';
import Editprofile from './components/EditProfile/editprofile';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Container>
              <Row>
                <Col className="mainsort-container">
                  <Namelist />
                </Col>
              </Row>
              <Row>
                <Col className="mainsort-container">
                  <Profile stu_id="60070098"/>
                </Col>
              </Row>
              <Row>
              <Col className="mainsort-container">
                  <Profileblock stu_id="60070098"/>
                </Col>
              </Row>
              <Row>
              <Col className="mainsort-container">
                  <Newsblock />
                </Col>
              </Row>
              <Row>
              <Col className="mainsort-container">
                  <Editprofile />
                </Col>
              </Row>
              <Row>
              <Col className="mainsort-container">
                  <Mainquestblock />
                </Col>
              </Row>
            </Container>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
