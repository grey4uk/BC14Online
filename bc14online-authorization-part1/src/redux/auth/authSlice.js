import { createSlice } from '@reduxjs/toolkit';

import { register, login, logout } from './authOperations';

const initialState = {
  token: '',
  email: '',
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.isAuth = true;
    },
    [login.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.isAuth = true;
    },
    [logout.fulfilled]: () => {
      return initialState;
    },
  },
});

export default authSlice.reducer;
