import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCNKSNhzcTSytZDliLp2T9SyvKXYV9UN7c",
    authDomain: "marioplan-b27a9.firebaseapp.com",
    databaseURL: "https://marioplan-b27a9.firebaseio.com",
    projectId: "marioplan-b27a9",
    storageBucket: "",
    messagingSenderId: "393793848436",
    appId: "1:393793848436:web:e8b099d2044fa140ed3d21",
    measurementId: "G-HGT7ZDMPKS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;