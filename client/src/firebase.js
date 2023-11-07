// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b38c1.firebaseapp.com",
  projectId: "mern-estate-b38c1",
  storageBucket: "mern-estate-b38c1.appspot.com",
  messagingSenderId: "725474608728",
  appId: "1:725474608728:web:51ae8dcfb1930f479f6c2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);