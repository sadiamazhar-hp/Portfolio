// store.jsx
import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './reducer'; // Import the reducer

// Setting up the store
const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});

export default store;

