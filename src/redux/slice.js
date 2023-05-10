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
    AddUserData(state, action) {
      state.userData = state.userData.push(action.payload);
    },
    EditUserData(state, action) {
      state.userData = state.userData.map((item) => (item.id === action.payload.id ? action.payload : item));
    },
    deleteItem(state, action) {
      const itemId = action.payload;
      state.userData = state.userData.filter((item) => item.id !== itemId);
    },
  },
});

export default slice.reducer;
export const { GetUserData, AddUserData, EditUserData, deleteItem } = slice.actions;
