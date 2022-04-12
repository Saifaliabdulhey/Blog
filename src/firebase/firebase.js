import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVZeSBieMhYGRp2RRPYnY5Rm6EcLLGQhc",
    authDomain: "blog-5da7f.firebaseapp.com",
    databaseURL: "https://blog-5da7f-default-rtdb.firebaseio.com",
    projectId: "blog-5da7f",
    storageBucket: "blog-5da7f.appspot.com",
    messagingSenderId: "576570024771",
    appId: "1:576570024771:web:280c0659d0007ff44285f6",
    measurementId: "G-75VYLDQCX2"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export { firebase, googleAuthProvider, database as default }