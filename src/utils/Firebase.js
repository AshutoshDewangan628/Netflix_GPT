// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbOnU21ooECzbSQ0XW22Ryzsnt7fnoqdA",
  authDomain: "netflix-gpt-a1862.firebaseapp.com",
  projectId: "netflix-gpt-a1862",
  storageBucket: "netflix-gpt-a1862.appspot.com",
  messagingSenderId: "701086534609",
  appId: "1:701086534609:web:5845d4c5c2db843d546ef0",
  measurementId: "G-ZE85Y92SQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();