import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

// import { Provider } from 'react-redux';
// import store from './store';

export const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#222" />
    <Routes />
  </>
);

export default App;
