
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './redux/slices/bookSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
