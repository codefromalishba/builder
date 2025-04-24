// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWs_iognq4zrQbFjVION2enJJrVhjTGKE",
  authDomain: "builder-96d46.firebaseapp.com",
  projectId: "builder-96d46",
  storageBucket: "builder-96d46.appspot.com",
  messagingSenderId: "312881685827",
  appId: "1:312881685827:web:f43e8d40cecfca3ef87bf6", // <-- Add this from Firebase console if you need messaging
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
