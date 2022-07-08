// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8AUGz_Q-tDPgFHooduVuF20yREiSys2g",
  authDomain: "mealpirates-ui.firebaseapp.com",
  projectId: "mealpirates-ui",
  storageBucket: "mealpirates-ui.appspot.com",
  messagingSenderId: "1098566325475",
  appId: "1:1098566325475:web:56f7a0d4855a078a4ae1d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)