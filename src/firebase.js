// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth/*, GoogleAuthProvider*/} from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT3Gxe09q9mEIetQxYaYo6ERM9nkjlmhs",
  authDomain: "miniprojectii-351fc.firebaseapp.com",
  projectId: "miniprojectii-351fc",
  storageBucket: "miniprojectii-351fc.appspot.com",
  messagingSenderId: "456204486086",
  appId: "1:456204486086:web:ab70c5555616c6a3881ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const myAuth = getAuth(app);
// export const googleAuth = new GoogleAuthProvider(app);  // new constructor is needed to invoke GoogleAuthProvider

export const myStorage = getStorage();

export const myDB = getFirestore()