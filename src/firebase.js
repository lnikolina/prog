import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initalizeApp } from 'firebase/app';
import { getAuth, createWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAdlLsDp2lu8gtrVHzjugSVpU9mZbxJPh4",
    authDomain: "visitporec-3d39f.firebaseapp.com",
    projectId: "visitporec-3d39f",
    storageBucket: "visitporec-3d39f.appspot.com",
    messagingSenderId: "114947157265",
    appId: "1:114947157265:web:d989bfed1f9d0d7346f0b0"
};

const app = initalizeApp (firebaseConfig);
const auth = (app);

export { firebase };