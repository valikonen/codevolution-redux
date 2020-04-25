import React from 'react';
import { Provider } from 'react-redux';

import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksActionsCakeContainer from './components/HooksActionsCakeContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ItemContainer cake />
      <ItemContainer />
      <CakeContainer />
      <HooksCakeContainer />
      <HooksActionsCakeContainer />
      <HooksIcecreamContainer />

      <UserContainer />
      
    </Provider>
  );
}

export default App;
