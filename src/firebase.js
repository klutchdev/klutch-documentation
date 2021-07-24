import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBY9g0k96iWcmdtc16G8rnX99E0gANeY8U",
  authDomain: "klutch-docs.firebaseapp.com",
  projectId: "klutch-docs",
  storageBucket: "klutch-docs.appspot.com",
  messagingSenderId: "1086018592556",
  appId: "1:1086018592556:web:98d9b520c0e1895b19d689",
  measurementId: "G-7XNQFGT79C",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

// Google auth provider
const provider = new firebase.auth.GoogleAuthProvider();

export const googleSignIn = async () => {
  await auth.signInWithPopup(provider).catch((error) => alert(error));
};

// export const increment = firebase.firestore.FieldValue.increment(1);
// export const decrement = firebase.firestore.FieldValue.increment(-1);
// export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
// export const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
// export const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
