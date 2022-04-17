// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBevG3rnRkwVoF80ESHEnQYKzSf8349R8k",
  authDomain: "sprint-3-ag.firebaseapp.com",
  projectId: "sprint-3-ag",
  storageBucket: "sprint-3-ag.appspot.com",
  messagingSenderId: "819842478744",
  appId: "1:819842478744:web:5f2cc1fa5e6dede85996ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const baseDato = getFirestore();

export { app, google, facebook, baseDato };