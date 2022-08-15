import { configureStore } from '@reduxjs/toolkit';

import uploadDataReducer from './slices/uploadSlice';
import transitionReducer from './slices/transitionSlice';
import returnDataReducer from './slices/returnDataSlice';

export const store = configureStore({
  reducer: {
    uploadData: uploadDataReducer,
    transition: transitionReducer,
    returnData: returnDataReducer,
  },
});
