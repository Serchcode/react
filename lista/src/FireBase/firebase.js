 import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBEMoXiCdwxQxZcLVgpxwF5Un5CN60iB-0",
    authDomain: "reactfire-1f8aa.firebaseapp.com",
    databaseURL: "https://reactfire-1f8aa.firebaseio.com",
    projectId: "reactfire-1f8aa",
    storageBucket: "reactfire-1f8aa.appspot.com",
    messagingSenderId: "787673268523"
  };


  const firebaseapp = firebase.initializeApp(config);

  export default firebaseapp;