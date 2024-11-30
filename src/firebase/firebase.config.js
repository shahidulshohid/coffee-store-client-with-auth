// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDruRlRp15LvU0VUcIHadtT5KC7RYQXlsE",
  authDomain: "coffee-store-7b968.firebaseapp.com",
  projectId: "coffee-store-7b968",
  storageBucket: "coffee-store-7b968.firebasestorage.app",
  messagingSenderId: "1048177658331",
  appId: "1:1048177658331:web:4e6bf6f6c63ea10ef57ffe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
