import axios from 'axios';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'bc11-4527e.firebaseapp.com',
  projectId: 'bc11-4527e',
  storageBucket: 'bc11-4527e.appspot.com',
  messagingSenderId: '949579986113',
  appId: '1:949579986113:web:fe74c795b6a872471c5040',
  measurementId: 'G-SV00XP4M7W',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export const firebase = {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};
