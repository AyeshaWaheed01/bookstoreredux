//ayesha waheed FA20-BSE-068
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './redux/slices/bookSlice'; 

import App from './App';

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
