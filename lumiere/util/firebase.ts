import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

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