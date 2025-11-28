import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { auth } from "./firebase/authdata";
import { provider } from "./firebase/authdata";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
function App() {
  let createUser = () => {
    createUserWithEmailAndPassword(auth, "bhumi1168@gmail.com", "7359836654")
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  let signInUser = () => {
    signInWithEmailAndPassword(auth, "bhumi1168@gmail.com", "7359836654")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  let signInUserWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)

        console.log(credential);
        console.log(token);
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(errorCode);
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
        // ...
      });
  };

  const handleAdd = async () => {
    try {
      const docRef = await addDoc(collection(db, "datanew"), {
        first: "Bhumi",
        middle: "Varun",
        last: "Bhatt",
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const handleGet = async () => {
    const querySnapshot = await getDocs(collection(db, "datanew"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };
  return (
    <>
      <button onClick={createUser()}>Sign Up</button>
      <button onClick={signInUser()}>Sign In</button>
      <button onClick={signInUserWithGoogle()}>Sign In With Google</button>
      <button onClick={handleAdd()}>Add Data</button>
      <button onClick={handleGet()}>Get Data</button>
    </>
  );
}

export default App;
