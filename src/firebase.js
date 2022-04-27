// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOWWz2M-YMBbVzTYSEdw72QPnl1V77HdU",
  authDomain: "project-86f92.firebaseapp.com",
  projectId: "project-86f92",
  storageBucket: "project-86f92.appspot.com",
  messagingSenderId: "779633974287",
  appId: "1:779633974287:web:c8e8c1c38d1452c658d77a",
  databaseURL:
    "https://console.firebase.google.com/project/project-86f92/database/project-86f92-default-rtdb/data/~2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
// export const database = getDatabase(app);
