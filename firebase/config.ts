// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFWYBtNlNWEhQ3N3_Ft1qThkavP99c8eE",
    authDomain: "personal-portfolio-c07e4.firebaseapp.com",
    projectId: "personal-portfolio-c07e4",
    storageBucket: "personal-portfolio-c07e4.appspot.com",
    messagingSenderId: "145311004571",
    appId: "1:145311004571:web:a3b651a4f1f537e98e933e",
    measurementId: "G-THWRJTB6DD"
};

// Initialize Firebase

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;