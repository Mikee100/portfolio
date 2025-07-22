// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLAt8lisHgG02HzWKMenY_lQa75fUFyeQ",
    authDomain: "portfolio-messages-aeba9.firebaseapp.com",
    projectId: "portfolio-messages-aeba9",
    storageBucket: "portfolio-messages-aeba9.firebasestorage.app",
    messagingSenderId: "244481643774",
    appId: "1:244481643774:web:db582a342bb479716281af",
    measurementId: "G-BL50W2KTMZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 