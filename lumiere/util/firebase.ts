import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import withFirebaseAuth from "react-with-firebase-auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMBJ_UHqUUopRKMUdAPkPFCJ2H-puD2QU",
  authDomain: "lumiere-b6cd9.firebaseapp.com",
  projectId: "lumiere-b6cd9",
  storageBucket: "lumiere-b6cd9.appspot.com",
  messagingSenderId: "568844241700",
  appId: "1:568844241700:web:8eb4c93b01940d4b95c1b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)


const providers = {
  googleProvider: new GoogleAuthProvider(),
}

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
})

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider)
}

const signOutFirebase = () => {
  signOut(auth)
}

export {
  db,
  auth,
  createComponentWithAuth,
  signInWithGoogle,
  signOutFirebase as signOut,
}