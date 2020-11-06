import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJYKc89h-bJ7v1xKX1SWoXzFhVpyLod14",
  authDomain: "walmart-app-edcd3.firebaseapp.com",
  databaseURL: "https://walmart-app-edcd3.firebaseio.com",
  projectId: "walmart-app-edcd3",
  storageBucket: "walmart-app-edcd3.appspot.com",
  messagingSenderId: "225124625633",
  appId: "1:225124625633:web:d6bcfbfa1595bc408ddba0",
  measurementId: "G-TY7X5SCL9Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
