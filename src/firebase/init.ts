import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCtbOqPDBUW_vC876ik7nidfep6_QQju3k",
  authDomain: "lifebook-e7048.firebaseapp.com",
  projectId: "lifebook-e7048",
  storageBucket: "lifebook-e7048.appspot.com",
  messagingSenderId: "448920297724",
  appId: "1:448920297724:web:4f314929a22c6bbd0f3779"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };