// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-FfRx2-ax9cOcz_kn4HrUro9pa4mlHqc",
  authDomain: "prepwise-532a5.firebaseapp.com",
  projectId: "prepwise-532a5",
  storageBucket: "prepwise-532a5.firebasestorage.app",
  messagingSenderId: "1010650174561",
  appId: "1:1010650174561:web:63818807bf2bc9f70c0620",
  measurementId: "G-GDBHK9WZ4D"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
