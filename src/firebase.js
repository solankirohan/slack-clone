import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5haHhHgsT_h1QoPBqISeaYJ-tXdg0BIc",
    authDomain: "slack-clone-54b52.firebaseapp.com",
    projectId: "slack-clone-54b52",
    storageBucket: "slack-clone-54b52.appspot.com",
    messagingSenderId: "324502670636",
    appId: "1:324502670636:web:6c70e6f9eea15b412fb089"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };