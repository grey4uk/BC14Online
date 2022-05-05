import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebase } from 'services/firebase';

const {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} = firebase;

export const register = createAsyncThunk(
  'auth/register',
  async (props, thunkApi) => {
    try {
      const { credentials, reset } = props;
      const { email, password } = credentials;
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      reset();
      return { token: user.accessToken, email: user.email };
    } catch (error) {
      alert('Something went wrong. Check input data');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (props, thunkApi) => {
    try {
      const { credentials, reset } = props;
      const { email, password } = credentials;
      const { user } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      reset();
      return { token: user.accessToken, email: user.email };
    } catch (error) {
      console.log('error.message', error.message);
      //       alert('Something went wrong. Check input data');
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (navigate, thunkApi) => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      alert('Something went wrong. Check input data');
    }
  }
);
