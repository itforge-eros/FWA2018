import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Profilemin />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
