import React from 'react';
import { Provider } from 'react-redux';

import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <HooksCakeContainer />
      <HooksIcecreamContainer />
    </Provider>
  );
}

export default App;
