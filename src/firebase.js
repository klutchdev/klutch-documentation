import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

/*===========================================================================//
  Config
//===========================================================================*/
const config = {
  apiKey: "AIzaSyBY9g0k96iWcmdtc16G8rnX99E0gANeY8U",
  authDomain: "klutch-docs.firebaseapp.com",
  projectId: "klutch-docs",
  storageBucket: "klutch-docs.appspot.com",
  messagingSenderId: "1086018592556",
  appId: "1:1086018592556:web:98d9b520c0e1895b19d689",
  measurementId: "G-7XNQFGT79C",
};

/*===========================================================================//
  Firebase app
//===========================================================================*/
const firebaseApp = initializeApp(config);

/*===========================================================================//
  Authentication
//===========================================================================*/

const provider = new GoogleAuthProvider();
export const auth = getAuth(firebaseApp);
export const logOut = () => {
  signOut(auth);
};
export const googleSignIn = async () => {
  await signInWithPopup(auth, provider);
};

/*===========================================================================//
  Firestore
//===========================================================================*/
export const firestore = getFirestore(firebaseApp);

/*===========================================================================//
  Storage
//===========================================================================*/
export const storage = getStorage(firebaseApp);
