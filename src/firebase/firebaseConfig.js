// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoODR8ytrB5FzW3_4K3DPbpiRBSs4UxM8",
  authDomain: "myntra-mynzen.firebaseapp.com",
  projectId: "myntra-mynzen",
  storageBucket: "myntra-mynzen.appspot.com",
  messagingSenderId: "1011440183969",
  appId: "1:1011440183969:web:254e107402116167f19ee0",
  measurementId: "G-SV6DZQ1G4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);