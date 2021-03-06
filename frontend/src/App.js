import './config/reactotron';

import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from './Routes/index';
import store from './store';

import GlobalStyle from './globalStyle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
    <ToastContainer />
  </Provider>
);

export default App;
