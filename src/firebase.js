import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdlLsDp2lu8gtrVHzjugSVpU9mZbxJPh4",
  authDomain: "visitporec-3d39f.firebaseapp.com",
  projectId: "visitporec-3d39f",
  storageBucket: "visitporec-3d39f.appspot.com",
  messagingSenderId: "114947157265",
  appId: "1:114947157265:web:a5389e1373eddcf846f0b0"
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

export { firebase };
