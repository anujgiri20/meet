import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9jBk37pqN9mTd1Lhao-Fxz2pG4Ru9jZw",
  authDomain: "meet-e9311.firebaseapp.com",
  databaseURL: "https://meet-e9311-default-rtdb.firebaseio.com",
  projectId: "meet-e9311",
  storageBucket: "meet-e9311.appspot.com",
  messagingSenderId: "424224612498",
  appId: "1:424224612498:web:f9730705707b164e8d464b",
  measurementId: "G-B8PDS1P4QC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerGithub = new firebase.auth.GithubAuthProvider();

export { db, auth, providerGoogle, providerGithub };