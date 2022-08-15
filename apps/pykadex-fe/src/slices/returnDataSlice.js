import { createSlice } from '@reduxjs/toolkit';

const initialStats = {
  attack: 0,
  defense: 0,
  spAttack: 0,
  spDefense: 0,
  speed: 0,
};

const initialState = {
  id: '',
  name: '',
  url: '',
  stats: initialStats,
  description: '',
  type: [],
};

export const returnData = createSlice({
  name: 'returnData',
  initialState,
  reducers: {
    updateId: (state, action) => {
      state.id = action.payload;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateUrl: (state, action) => {
      state.url = action.payload;
    },
    updateStats: (state, action) => {
      state.stats = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    updateType: (state, action) => {
      state.type = action.payload;
    },
    resetReturnData: (state, action) => {
      state.id = '';
      state.name = '';
      state.url = '';
      state.stats = initialStats;
      state.description = '';
      state.type = [];
    },
  },
});

export const {
  updateId,
  updateName,
  updateUrl,
  updateStats,
  updateDescription,
  updateType,
  resetReturnData,
} = returnData.actions;
export default returnData.reducer;
