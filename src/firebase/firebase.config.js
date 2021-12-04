// Firebase functions
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Firebase configuration of Web App
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Run firebase
firebase.initializeApp(firebaseConfig);

// Save firebase functions
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleProvider, firebase };
