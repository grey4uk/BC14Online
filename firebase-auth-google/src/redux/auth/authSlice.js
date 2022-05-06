import { createSlice } from '@reduxjs/toolkit';
import {
  registerGoogle,
  logOut,
} from 'redux/auth/authOperations';

const initialState = {
  token: '',
  user: {},
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    refreshUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: {
    [registerGoogle.fulfilled]: (state, action) => ({
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    }),
    // {
    //   state.token = action.payload;
    // },
    [logOut.fulfilled]: () => initialState,
  },
});

export const { refreshUser } = auth.actions;

export default auth.reducer;
