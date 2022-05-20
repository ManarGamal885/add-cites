// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKofTHDSBe0yAk4W4Q3SqecO6KbyBIN6I",
    authDomain: "cs303-2022-8c3c0.firebaseapp.com",
    databaseURL: "https://cs303-2022-8c3c0-default-rtdb.firebaseio.com",
    projectId: "cs303-2022-8c3c0",
    storageBucket: "cs303-2022-8c3c0.appspot.com",
    messagingSenderId: "675632741153",
    appId: "1:675632741153:web:8c85ad9f062d333241dc60",
    measurementId: "G-6QXS6YBZYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };