import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC4-pfiZ9YBVfQBqqvilOzgAe6ZRrhSQXY",
  authDomain: "shoppingcart-28357.firebaseapp.com",
  databaseURL: "https://shoppingcart-28357.firebaseio.com",
  projectId: "shoppingcart-28357",
  storageBucket: "shoppingcart-28357.appspot.com",
  messagingSenderId: "242653689420",
  appId: "1:242653689420:web:6ba614ae4cd6c499de66e9",
  measurementId: "G-YFK2982E6B"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export default db;
