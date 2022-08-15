import { configureStore } from '@reduxjs/toolkit';

import uploadDataReducer from './slices/uploadSlice';

export const store = configureStore({
  reducer: {
    uploadData: uploadDataReducer,
  },
});
