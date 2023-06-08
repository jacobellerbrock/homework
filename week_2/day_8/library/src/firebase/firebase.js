// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2hgwNWcoAdtryokjeVoLw6xJ58Mr5kGw",
    authDomain: "library-13c7b.firebaseapp.com",
    projectId: "library-13c7b",
    storageBucket: "library-13c7b.appspot.com",
    messagingSenderId: "1093650879862",
    appId: "1:1093650879862:web:678927cefcce160ab19657",
    measurementId: "G-4Y3GE4SEZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };