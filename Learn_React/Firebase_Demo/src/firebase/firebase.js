import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqSbltIisvCQ2HuK6Q48-BjdcQzplbNfQ",
  authDomain: "demofirebase-4766e.firebaseapp.com",
  projectId: "demofirebase-4766e",
  storageBucket: "demofirebase-4766e.firebasestorage.app",
  messagingSenderId: "953924341105",
  appId: "1:953924341105:web:6f7964edcc13fa30723ad0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
