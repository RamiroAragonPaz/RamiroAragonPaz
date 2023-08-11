// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx9EHT6TdErQFuq-k-o4yzXwHE8FV6yBw",
  authDomain: "personalportfolio-c1f38.firebaseapp.com",
  projectId: "personalportfolio-c1f38",
  storageBucket: "personalportfolio-c1f38.appspot.com",
  messagingSenderId: "803882466122",
  appId: "1:803882466122:web:ed903d9ac7b702a0a31fb3",
  measurementId: "G-54QCF4NB1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
