// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbdfi9BjqqqD8YQsUeJtaWgsioFIdEPfI",
  authDomain: "expense-tracker-b5840.firebaseapp.com",
  projectId: "expense-tracker-b5840",
  storageBucket: "expense-tracker-b5840.appspot.com",
  messagingSenderId: "944304243536",
  appId: "1:944304243536:web:07f40dd80d97aac49ca255",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
