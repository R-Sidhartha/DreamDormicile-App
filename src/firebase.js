
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dreamdomicile-3c322.firebaseapp.com",
  projectId: "dreamdomicile-3c322",
  storageBucket: "dreamdomicile-3c322.appspot.com",
  messagingSenderId: "163252043857",
  appId: "1:163252043857:web:4ae715f0a5b90abf9db870"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
