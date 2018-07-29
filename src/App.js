import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history, persistor } from './store';
import { Container } from 'reactstrap';

import { PersistGate } from 'redux-persist/integration/react';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// FontAwesome
import './FontAwesome';

// Route
import Routes from './Routes';

// work components
// import Newsblock from './components/NewsBlock/newsblock';
// import Profileblock from './components/ProfileBlock/profileblock';
// import Mainquestblock from './components/MainQuestBlock/mainquestblock';

// import Profile from './components/Profile/profile';
// import Namelist from './components/Namelist/namelist';
// import Editprofile from './components/EditProfile/editprofile';
// import Quests from './components/Quests/quests';
// import Scan from './components/Scan/scan';
// import Myqrcode from './components/MyQrCode/myqrcode';
// import Entercode from './components/Entercode/entercode';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <div className="App">
          <Container>
            <Routes />
          </Container>
        </div>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
