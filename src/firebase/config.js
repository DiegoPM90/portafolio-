require("dotenv").config();
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.API_KEY",
  authDomain: "formulario-portafolio-f7c1f.firebaseapp.com",
  projectId: "formulario-portafolio-f7c1f",
  storageBucket: "formulario-portafolio-f7c1f.appspot.com",
  messagingSenderId: "913969916997",
  appId: "1:913969916997:web:5c4f4f6124575f0bd3072c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestoreDB = app.firestore()