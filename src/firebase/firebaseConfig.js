import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG6Cm1gbR4zzWlfphVnZ-jsv4H7KGGN8Q",
  authDomain: "journalapp22.firebaseapp.com",
  projectId: "journalapp22",
  storageBucket: "journalapp22.appspot.com",
  messagingSenderId: "968469813290",
  appId: "1:968469813290:web:99e02a059eb278d212cb53",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
