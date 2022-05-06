import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';

import { auth, provider } from 'services/firebase';

export const registerGoogle = createAsyncThunk(
  'auth/authGoogle',
  async (_, thunkApi) => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential =
          GoogleAuthProvider.credentialFromResult(result);
        // console.log('credential>>>', credential);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('user', user);
        // console.log('user', user);

        return {
          token,
          user: {
            name: user.displayName,
            email: user.email,
          },
        };
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential =
          GoogleAuthProvider.credentialFromError(error);
        // ...
        return thunkApi.rejectWithValue('error');
      });
  }
);
export const logOut = createAsyncThunk(
  'auth/logOut',
  () => {
    return signOut(auth)
      .then((res) => {
        // Sign-out successful.
        console.log('res of signout++++++++', res);
      })
      .catch((error) => {
        // An error happened.
      });
  }
);
