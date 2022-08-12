import { configureStore } from '@reduxjs/toolkit';

import uploadDataReducer from './slices/uploadData';

export const store = configureStore({
  reducer: {
    uploadData: uploadDataReducer,
  },
});
