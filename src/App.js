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
import Profilemin from './components/ProfileBlock/ProfileBlock'
import Profile from './components/ProfileMain/Profile'
import Namelist from './components/Namelist/NamelistMain'

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
                <Col className="mainsort-container">
                  <Profilemin stu_id="60070098"/>
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
