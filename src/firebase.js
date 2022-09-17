import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firebase';
import { initalizeApp } from 'firebase/app';
import { getAuth, createWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {

};

const app = initalizeApp (firebaseConfig);
const auth = (app);

export { firebase };