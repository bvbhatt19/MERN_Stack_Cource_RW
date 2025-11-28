import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqSbltIisvCQ2HuK6Q48-BjdcQzplbNfQ",
  authDomain: "demofirebase-4766e.firebaseapp.com",
  projectId: "demofirebase-4766e",
  storageBucket: "demofirebase-4766e.firebasestorage.app",
  messagingSenderId: "953924341105",
  appId: "1:953924341105:web:6f7964edcc13fa30723ad0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
