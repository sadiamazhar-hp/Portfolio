// reducer.jsx
import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleNavbar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Exporting the action for use in components
export const { toggleNavbar } = navbarSlice.actions;

// Exporting the reducer to be used in the store configuration
export default navbarSlice.reducer;
