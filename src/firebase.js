import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBY9g0k96iWcmdtc16G8rnX99E0gANeY8U",
  authDomain: "klutch-docs.firebaseapp.com",
  projectId: "klutch-docs",
  storageBucket: "klutch-docs.appspot.com",
  messagingSenderId: "1086018592556",
  appId: "1:1086018592556:web:98d9b520c0e1895b19d689",
  measurementId: "G-7XNQFGT79C",
};
const firebaseApp = initializeApp(firebaseConfig);

// Auth
const provider = new GoogleAuthProvider();
export const auth = getAuth(firebaseApp);
export const googleSignIn = async () => await signInWithPopup(auth, provider);
export const logOut = async () => await signOut(auth);

// Firestore
export const firestore = getFirestore(firebaseApp);

// storage
export const storage = getStorage(firebaseApp);
