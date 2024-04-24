// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARiwalrCo7KrQpgZIIJDmzK6hozqy-Ci0",
  authDomain: "netflix-gpt-ed185.firebaseapp.com",
  projectId: "netflix-gpt-ed185",
  storageBucket: "netflix-gpt-ed185.appspot.com",
  messagingSenderId: "452623613855",
  appId: "1:452623613855:web:a2546a58733ee2e4f6c7aa",
  measurementId: "G-HNZX093K8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);