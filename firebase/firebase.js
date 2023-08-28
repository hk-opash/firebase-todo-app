// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALFlrc9ruD9eVEjQhCL4jN14rae9dU87Y",
  authDomain: "fir-todo-app-d7185.firebaseapp.com",
  projectId: "fir-todo-app-d7185",
  storageBucket: "fir-todo-app-d7185.appspot.com",
  messagingSenderId: "807662216652",
  appId: "1:807662216652:web:191a73c8f36b8df5af2969",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
