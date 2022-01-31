import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './redux/store';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
export const App = () => (
  <PaperProvider>
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#222" />
      <Routes />
    </Provider>
  </PaperProvider>
);

export default App;
