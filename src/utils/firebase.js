// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANkzXoS_VOmGaQVdHudr-kRv_nBUEH4n0",
  authDomain: "netflixgpt-dc7e4.firebaseapp.com",
  projectId: "netflixgpt-dc7e4",
  storageBucket: "netflixgpt-dc7e4.appspot.com",
  messagingSenderId: "399100924775",
  appId: "1:399100924775:web:b8908bb1be79b5b3d1d5c2",
  measurementId: "G-5ETCH0Y7K2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();