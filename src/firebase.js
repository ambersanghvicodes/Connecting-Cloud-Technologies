import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDX7voz5-RsazT7YK9S4nS4UNqo9SvKzo8",
  authDomain: "connecting-cloud-consultancy.firebaseapp.com",
  projectId: "connecting-cloud-consultancy",
  storageBucket: "connecting-cloud-consultancy.appspot.com",
  messagingSenderId: "715342438473",
  appId: "1:715342438473:web:23e364edb5c4851df21f98",
});

var db = firebaseApp.firestore();

export { db };
