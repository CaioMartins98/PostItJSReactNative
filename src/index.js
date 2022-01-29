import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './redux/store';

export const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#222" />
    <Routes />
  </Provider>
);

export default App;
