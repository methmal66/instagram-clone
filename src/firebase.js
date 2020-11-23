import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBeaF1bw6MsTLzwcNaCpouodRln3skWWTg",
  authDomain: "instagram-clone-adc81.firebaseapp.com",
  databaseURL: "https://instagram-clone-adc81.firebaseio.com",
  projectId: "instagram-clone-adc81",
  storageBucket: "instagram-clone-adc81.appspot.com",
  messagingSenderId: "499518177038",
  appId: "1:499518177038:web:7529dd7fc3e9675b58e15f",
  measurementId: "G-K3K540EWFM",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
export default firebase;
