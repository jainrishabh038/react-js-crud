import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  userData: {},
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    GetUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export default slice.reducer;
export const { GetUserData } = slice.actions;
