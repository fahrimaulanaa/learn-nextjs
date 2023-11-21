// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnoCqd78Obq9BUyKDr2XR3l7o4v7mZi0g",
  authDomain: "test-deploy-next-4f526.firebaseapp.com",
  projectId: "test-deploy-next-4f526",
  storageBucket: "test-deploy-next-4f526.appspot.com",
  messagingSenderId: "670062846789",
  appId: "1:670062846789:web:eb3e8e441840cec09b942c",
  measurementId: "G-Z3MQNKJTTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);