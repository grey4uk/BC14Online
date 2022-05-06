// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'authorization-1ffb1.firebaseapp.com',
  databaseURL:
    'https://authorization-1ffb1-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'authorization-1ffb1',
  storageBucket: 'authorization-1ffb1.appspot.com',
  messagingSenderId: '763650332185',
  appId: '1:763650332185:web:aa00aa1a1cd3086dabbc88',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider };
