import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBesBRQkO0vys80pbMgaAJ-5TmVra8pOHQ",
  authDomain: "crwn-wolf.firebaseapp.com",
  databaseURL: "https://crwn-wolf.firebaseio.com",
  projectId: "crwn-wolf",
  storageBucket: "crwn-wolf.appspot.com",
  messagingSenderId: "125778270669",
  appId: "1:125778270669:web:c0a5a7276390703bcecc84",
  measurementId: "G-M2VQ41M6XZ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
