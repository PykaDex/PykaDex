import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDocsTransition: false,
};

export const transition = createSlice({
  name: 'uploadData',
  initialState,
  reducers: {
    toggleDocs: (state, action) => {
      state.isDocsTransition = action.payload;
    },
  },
});

export const { toggleDocs } = transition.actions;
export default transition.reducer;
