import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcmA6BRFViwbX6cWQOkpgRAev1JoGPEfA",
  authDomain: "challenge-b6e78.firebaseapp.com",
  databaseURL: "https://challenge-b6e78.firebaseio.com",
  projectId: "challenge-b6e78",
  storageBucket: "challenge-b6e78.appspot.com",
  messagingSenderId: "1083558842542",
  appId: "1:1083558842542:web:3b371b2f8bdce3b113dd3f",
  measurementId: "G-VDTJDD3DDC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
