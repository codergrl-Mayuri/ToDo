// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASKCmGo0zsu7mNQPpEwHGPzzyRrz3VRvM",
  authDomain: "todo-app-a0fe7.firebaseapp.com",
  projectId: "todo-app-a0fe7",
  storageBucket: "todo-app-a0fe7.appspot.com",
  messagingSenderId: "652884154801",
  appId: "1:652884154801:web:fe9f1a563a1e5ce0110590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)