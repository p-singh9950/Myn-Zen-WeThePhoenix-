import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDoODR8ytrB5FzW3_4K3DPbpiRBSs4UxM8",
  authDomain: "myntra-mynzen.firebaseapp.com",
  projectId: "myntra-mynzen",
  storageBucket: "myntra-mynzen.appspot.com",
  messagingSenderId: "1011440183969",
  appId: "1:1011440183969:web:254e107402116167f19ee0",
  measurementId: "G-SV6DZQ1G4E"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)
