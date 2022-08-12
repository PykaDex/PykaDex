import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fileName: '',
  isUploaded: false,
  isSent: false,
  isLoaded: false,
};

export const uploadData = createSlice({
  name: 'uploadData',
  initialState,
  reducers: {
    updateFileName: (state, action) => {
      state.fileName = action.payload;
    },
    clearFileName: (state) => {
      state.fileName = '';
    },
    toggleIsUploaded: (state, action) => {
      state.isUploaded = action.payload;
    },
    toggleIsSent: (state, action) => {
      state.isSent = action.payload;
    },
    toggleIsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const {
  updateFileName,
  clearFileName,
  toggleIsUploaded,
  toggleIsSent,
  toggleIsLoaded,
} = uploadData.actions;
export default uploadData.reducer;
