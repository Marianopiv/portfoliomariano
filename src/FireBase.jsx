// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "portfolio-72a0f.firebaseapp.com",
  projectId: "portfolio-72a0f",
  storageBucket: "portfolio-72a0f.appspot.com",
  messagingSenderId: "134085135044",
  appId: "1:134085135044:web:fd572dbe0b864c2af69791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app);
