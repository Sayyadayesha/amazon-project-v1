import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCRW8ZENsfv2aGlopqKiu-B2e3wAjPWxpg",
  authDomain: "clone-v1-2a8d6.firebaseapp.com",
  projectId: "clone-v1-2a8d6",
  storageBucket: "clone-v1-2a8d6.appspot.com",
  messagingSenderId: "904996430116",
  appId: "1:904996430116:web:8ac39f9e18fd0dabf1d3b1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };